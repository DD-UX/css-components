(function(angular) {
  'use strict';

  /**
   * Each section of the site has its own module. It probably also has
   * submodules, though this boilerplate is too simple to demonstrate it. Within
   * `src/app/home`, however, could exist several additional folders representing
   * additional modules that would then be listed as dependencies of this one.
   * For example, a `note` section could have the submodules `note.create`,
   * `note.delete`, `note.edit`, etc.
   *
   * Regardless, so long as dependencies are managed correctly, the build process
   * will automatically take take of the rest.
   *
   * The dependencies block here is also where component dependencies should be
   * specified, as shown below.
   */
  var module = window.mainApp + '.home';
  angular.module(module)

  /**
   * Each section or module of the site can also have its own routes. AngularJS
   * will handle ensuring they are all available at run-time, but splitting it
   * this way makes each module more "self-contained".
   */
  .config(Config)
    .controller('HomeController', HomeController);

  Config.$inject = ['$stateProvider'];

  function Config($stateProvider) {
    $stateProvider.state('home', {
      url: '/',
      views: {
        'main': {
          controller: 'HomeController',
          templateUrl: 'components/home/home.tpl.html'
        }
      },
      data: {
        pageTitle: 'CSS components'
      }
    });
  }

  //Adding injections for HomeController
  HomeController.$inject = ['$scope'];

  /**
   * HomeController
   * @param $scope
   * @constructor
   */
  function HomeController($scope) {
    $scope.swiper = '';


  }

})(angular);
