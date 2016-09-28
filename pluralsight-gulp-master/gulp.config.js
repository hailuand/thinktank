/**
 * Created by andreashailu on 8/2/16.
 */

/**
 * Configuration object used in gulpfile.js
 * @returns {{alljs: string[]}}
 */
module.exports = function () {
    var client = './src/client/';
    var clientApp = client + 'app/';
    var server = './src/server/';
    var temp = './.tmp/';

    var config = {
        temp: temp,
        /**
         * File paths
         */
        // All JS to vet
        alljs: [
            './src/**/*.js',
            './*.js'
        ],
        // Location for all less files
        less: client + 'styles/styles.less',
        index: client + 'index.html',
        js: [
            clientApp + '**/*.module.js',
            clientApp + '**/*.js',
            '!' + clientApp + '**/*.spec.js' // Bang means exclusion
        ],
        client: client,
        // Bower and NPM Locations
        bower: {
            json: require('./bower.json'),
            directory: './bower_components',
            ignorePath: '../..'
        },
        build: './build/', // Also commonly named /dist/
        fonts: './bower_components/font-awesome/fonts/**/*.*',
        css: temp + 'styles.css',
        images: client + 'images/**/*.*',
        /**
         * Node settings
         */
        defaultPort: 7203,
        nodeServer: './src/server/app.js',
        server: server,
        browserReloadDelay: 1000,
        htmlTemplates: clientApp + '**/*.html',
        templateCache: {
            file: 'templates.js',
            options: {
                module: 'app.core',
                standalone: false, // Discerns whether or not to create a new module
                root: 'app/'
            }
        },
        html: clientApp + '**/*.html'
    };

    config.getWiredepDefaultOptions = function() {
      var options = {
          bowerJson : config.bower.json,
          directory: config.bower.directory,
          ignorePath: config.bower.ignorePath
      };

      return options;
    };

    return config;
};
