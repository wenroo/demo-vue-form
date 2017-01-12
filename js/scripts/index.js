var _ = require('underscore');

// require('bootstrap/js/tab');
// require('bootstrap/js/modal');
require('bootstrap/js/transition');
// require('bootstrap/js/dropdown');
// require('bootstrap/js/collapse');
require('../../bower_components/device.js/lib/device.min');
require('../../bower_components/countdown/dest/jquery.countdown');

var wenui = require('./modules/wenui');
var theme = require('./modules/theme');

wenui.jQueryBrowser();


(function ($) {

  theme.init();

})(jQuery);
