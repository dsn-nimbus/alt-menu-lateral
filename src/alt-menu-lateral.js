;(function(ng) {
  "use strict";

  ng.module('alt.menu-lateral', [])
    .directive('altMenuLateralHandler', [function() {
          return function(scope, element, attrs) {
            var MARGIN_LEFT = 'margin-left';
            var ESCONDIDO = '-999px';
            var VISIVEL = '0px';
            var menu = $(attrs.idMenu);

            menu.css({'margin-left': ESCONDIDO});

            element.on('click', function() {
              var ml = (menu.css('margin-left') === ESCONDIDO) ? VISIVEL : ESCONDIDO;
              menu.css({'margin-left': ml});
            });
          };
      }]);
}(angular));
