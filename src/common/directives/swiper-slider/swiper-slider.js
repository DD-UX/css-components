(function(angular) {
  'use strict';

  var module = window.mainApp + '.common';
  /**
   * Directive to format the `body` depending presence of some elements
   */
  angular.module(module)
    .directive('swiperSlider', SwiperSlider);


  /**
   * @param $timeout
   * @returns {{scope: {parameters: Object}}
   * @constructor
   */
  function SwiperSlider() {
    return {
      restrict: 'A',
      scope: {
        parameters: '='
      },
      link: function(scope, elem) {

        var uuid = createUUID(),
            swipers = [];

          elem.addClass('class-' + uuid);
          swipers[uuid] = new window.Swiper('.class-' + uuid, scope.parameters);

      }
    };
  }

  function createUUID() {
    // http://www.ietf.org/rfc/rfc4122.txt
    var s = [];
    var hexDigits = '0123456789abcdef';
    for (var i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = '-';

    return s.join('');
  }


})(angular);
