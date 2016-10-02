/**
 * Created by andreashailu on 10/1/16.
 */

(function() {
  'use strict';

  var module = angular.module('psMovies');
  module.component('movieRating', {
    templateUrl: '/src/ps-movies/movie-rating.component.html',
    bindings: { // Bindings are a way of sharing information with outside scopes
      value: '<' // '<' means input (supplied from the outside world)
    },
    controllerAs: 'vm',
    controller: function() {
      var vm = this;

      vm.$onInit = function() {
        vm.entries = new Array(vm.value); // Creates an array of vm.value elements
      };

      vm.$onChanges = function() { // Invoked whenever one of the component's bindings is modified
        vm.entries = new Array(vm.value);
      };
    },
    transclude: true // Allows you to bring in information from the view to the controller through transclusion
  });

}());