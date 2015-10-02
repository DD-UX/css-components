(function(angular) {
  'use strict';

  var module = window.mainApp + '.common';
  /**
   * Directive to format the `body` depending presence of some elements
   */
  angular.module(module)
    .directive('fixedsticky', fixedSticky);

  function fixedSticky() {
    return {
      restrict: 'C',
      link: function(scope, elem) {

        window.FixedSticky.tests.sticky = false;
        elem.fixedsticky();

      }
    };
  }

})(angular);
