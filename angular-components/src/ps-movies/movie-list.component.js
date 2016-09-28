/**
 * Created by andreashailu on 9/27/16.
 */

(function() {
  'use strict';
  var module = angular.module('psMovies');

  function fetchMovies($http) {
    return $http.get('/src/ps-movies/movies.json').then(function(response) {
      return response.data;
    });
  }

  function controller($http) {
    var vm = this;

    vm.downRating = function(movie) {
      if (movie.rating > 1) {
        movie.rating -= 1;
      }
    };
    vm.movies = [];
    vm.upRating = function(movie) {
      if (movie.rating < 5) {
        movie.rating += 1;
      }
    };

    vm.$onInit = function() {
      vm.movies = fetchMovies($http).then(function(movies) {
        console.log(movies);
        vm.movies = movies;
      });
    };
  }

  // While 'movieList' component name is camel cased, Angular will now refer
  // to this module as 'movie-list' when used in the markup. So, when referring
  // to this component in the view, you will see it referred to as <movie-list></movie-list>.
  module.component('movieList', {
    templateUrl: '/src/ps-movies/movie-list.component.html',
    controllerAs: 'vm',
    // The controller will by default use the 'ControllerAs' syntax. The default
    // alias for the controller in the view is $ctrl.
    controller: ['$http', controller]
  });

}());