/**
 * Created by andreashailu on 8/2/16.
 */

var gulp = require('gulp');
var args = require('yargs').argv;
// Gets all gulp-* plugins as it sees them being used
var $ = require('gulp-load-plugins')({ lazy: true });
var del = require('del'); // Deletes files
var config = require('./gulp.config')(); // Grabs instance of config from gulp.config.js
var port = process.env.PORT || config.defaultPort;
var browserSync = require('browser-sync');

gulp.task('help', $.taskListing); // Display all tasks

gulp.task('default', ['help']); // $ gulp displays this

gulp.task('vet', function () {
    log('Analyzing source with JSHint and JSCS...');
    return gulp
        .src(config.alljs)
        .pipe($.if(args.verbose, $.print())) // Only print out all
        .pipe($.jscs())
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', { verbose: true }))
        .pipe($.jshint.reporter('fail')); // Fails immediately if JSHint fails
});

gulp.task('clean-fonts', function (done) {
    clean(config.build + 'fonts/**/*.*');
    done(); // For some reason, passing done into clean() as callback doens't work
});

gulp.task('clean-images', function (done) {
    clean(config.build + 'images/**/*.*');
    done();
});

gulp.task('clean', function(done) {
    var delconfig = [].concat(config.build, config.temp);
    log('Cleaning: ' + $.util.colors.blue(delconfig));
    del(delconfig, done);
});

// done is a callback fn
gulp.task('clean-styles', function (done) {
    clean(config.temp + '**/*.css');
    done();
});

gulp.task('clean-code', function (done) {
    var files = [].concat(
        config.temp + '**/*.js',
        config.build+ '**/*.html',
        config.build + 'js**/*.js'
    );
    clean(files);
    done();
});

gulp.task('templatecache', ['clean-code'], function() {
    log('Creating AngularJs $templateCache');

    return gulp
        .src(config.htmlTemplates)
        .pipe($.minifyHtml({empty: true})) // empty:true means include empty tags
        .pipe($.angularTemplatecache(
            config.templateCache.file,
            config.templateCache.options))
        .pipe(gulp.dest(config.temp));
});

gulp.task('styles', ['clean-styles'], function () {
    log('Compiling Less --> CSS');
    return gulp
        .src(config.less)
        .pipe($.plumber())
        .pipe($.less())
        .pipe($.autoprefixer({ browsers: ['last 2 version', '> 5%'] }))
        .pipe(gulp.dest(config.temp));
});

gulp.task('images', ['clean-images'],function() {
    log('Copying the images');

    return gulp
        .src(config.images)
        .pipe($.imagemin({optimizationLevel: 4})) // Default imagemin optimization level is 3
        .pipe(gulp.dest(config.build + 'images'));
});

gulp.task('fonts', ['clean-fonts'], function() {
    log('Copying fonts');

    return gulp
        .src(config.fonts)
        .pipe(gulp.dest(config.build + 'fonts'));
});

gulp.task('optimize', ['inject'], function() {
    log('Optimizing js, css, html');

    var templateCache = config.temp + config.templateCache.file;

    return gulp
        .src(config.index)
        .pipe($.plumber())
        .pipe($.inject(gulp.src(templateCache, {read: false}), {
            starttag: '<!-- inject:templates:js -->'
        }))
        .pipe($.useref({searchPath: './'}))
        .pipe(gulp.dest(config.build));
});

function clean(path) {
    log('Cleaning: ' + $.util.colors.blue(path));
    del(path);
}

gulp.task('wiredep', function () {
    log('Wire up the bower css, js, and app js into html');
    var options = config.getWiredepDefaultOptions();
    var wiredep = require('wiredep').stream; // .stream allows use in gulp streams

    return gulp
        .src(config.index) // Get html
        .pipe(wiredep(options)) // Look up in bower.json, see dependencies, pull them in
        .pipe($.inject(gulp.src(config.js)))
        .pipe(gulp.dest(config.client));
});

gulp.task('inject', ['wiredep', 'styles', 'templatecache', 'images', 'fonts'], function () {
    log('Wire up app css into html, and call wiredep');

    return gulp
        .src(config.index) // Get html
        .pipe($.inject(gulp.src(config.css)))
        .pipe(gulp.dest(config.client));
});

gulp.task('serve-build', ['optimize'], function() {
    serve(false);
});

// Prep code, run node server, restart on node changes
// gulp-nodemon adds support for running a task on fire of the events
gulp.task('serve-dev', ['inject'], function () {
    serve(true);
});

//////

function serve(isDev) {
    var nodeOptions = {
        script: config.nodeServer,
        delayTime: 1,
        env: {
            'PORT': port,
            'NODE_ENV': isDev ? 'dev' : 'build'
        },
        watch: [config.server]
    };
    // Various callback fns on certain events
    // Can pass in a list of gulp tasks as second optional param to run before
    // callback fn is executed
    return $.nodemon(nodeOptions)
        .on('restart', ['vet'], function (ev) {
            log('*** nodemon restarted ***');
            log('files changed on restart:\n' + ev);
            setTimeout(function() {
                browserSync('reloading now ...');
                browserSync.reload({stream: false}); // Don't return gulp stream
            }, config.browserReloadDelay); // Delaying for some time such that nodemon has time to restart server
        })
        .on('start', function () {
            log('*** nodemon started ***');
            startBrowserSync(isDev);
        })
        .on('crash', function () {
            log('*** nodemon crashed: script crashed for some reason!');
        })
        .on('exit', function () {
            log('*** nodemon exited gracefully ***');
        });
}

function changeEvent(event) {
    var srcPattern = new RegExp('.*(?=/' + config.source + ')/');
    log('File ' + event.path.replace(srcPattern, '') + ' ' + event.type);
}

function startBrowserSync(isDev) {
    // Check if browsersync is already running, or if in nosync mode
    if (args.nosync || browserSync.active) {
        return;
    }

    log('Start browser-sync on port: ' + port);
    if(isDev) {
        // Build css file if less file changes are observed
        gulp.watch([config.less], ['styles'])
            .on('change', function(event) { changeEvent(event); });
    }
    else {
        // Build css file if less file changes are observed
        gulp.watch([config.less, config.js, config.html], ['optimize',
            browserSync.reload])
            .on('change', function(event) { changeEvent(event); });
    }
    var options = {
        proxy: 'localhost:' + port,
        port: 3000,
        files: isDev ? [ // Only change automatically if serving dev mode
            config.client + '**/*.*',
            '!' + config.less, // Don't watch less file
            config.temp + '**/*.css'
        ] : [],
        // Ghost Mode options configure how to replicate actions across all
        // browsers
        ghostMode: {
            clicks: true,
            location: false,
            forms: true,
            scroll: true
        },
        // If injectChanges is set to true, will attempt to inject only the
        // file with changes instead of entire project
        injectChanges: true,
        logFileChanges: true,
        logLevel: 'debug',
        logPrefix: 'gulp-patterns',
        notify: true,
        reloadDelay: 0
    };

    browserSync(options);
}

/**
 * Logging utility function.
 * @param msg Message to be logged
 */
function log(msg) {
    $.util.log($.util.colors.green(msg));
}
