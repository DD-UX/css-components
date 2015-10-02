(function(angular) {
  'use strict';

  var module = window.mainApp + '.common';
  /**
   * Directive to format the `body` depending presence of some elements
   */
  angular.module(module)
    .directive('body', Body);


  Body.$inject = ['snSkrollr'];

  function Body(snSkrollr) {
    return {
      restrict: 'E',
      link: function(scope) {

        function clearParallax(stateName) {
          if (stateName !== 'parallax') {
            snSkrollr.destroy();
          } else {
            snSkrollr.init();
          }
        }

        scope.$on('$stateChangeSuccess', function(event, toState) {
          clearParallax(toState.name);
        });
      }
    };
  }

})(angular);
