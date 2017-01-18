var _ = require('underscore'),
    moment = require('moment'),
    View = require('vue'),
    //ViewAsyncData = require('vue-async-data'),
    store = require('../../../bower_components/store-js/store');

//View.use(ViewAsyncData);
View.config.devtools = false;
View.config.debug = true;

//UI
var shapeShift = require('../../../bower_components/jquery.shapeshift/core/jquery.shapeshift')
require('../../../bower_components/jquery-ui/jquery-ui');
require('../../../bower_components/jquery.shapeshift/core/vendor/jquery.ui.touch-punch.min');

var droplist = {
  'items' : [
  {
    'name' : '2*2整块',
    'preview': './images/droplist/001.jpg',
  },
  {
    'name' : '2*2上下',
    'preview': './images/droplist/002.jpg',
  },
  {
    'name' : '2*2上下',
    'preview': './images/droplist/003.jpg',
  },
  {
    'name' : '2*2整块',
    'preview': './images/droplist/001.jpg',
  },
  {
    'name' : '2*2上下',
    'preview': './images/droplist/002.jpg',
  },
  {
    'name' : '2*2上下',
    'preview': './images/droplist/003.jpg',
  },
  {
    'name' : '2*2整块',
    'preview': './images/droplist/001.jpg',
  },
  {
    'name' : '2*2上下',
    'preview': './images/droplist/002.jpg',
  },
  {
    'name' : '2*2上下',
    'preview': './images/droplist/003.jpg',
  },
  ]
};

module.exports = {
  init:function(data){
    var that = this;

    this.drop = new View({
      el:'#page',
      replace: false,
      template: '#drop-main-template',
      data: {
        'title': '楼层部署页面',
        'droplist': droplist,
      },
      init: function(){
      },
      created: function(){
        var self = this;
      },
      ready: function() {
        console.log('in');
        // $('#drop-box').shapeshift({
        //   crossDropWhitelist: ".swiper-slide",
        // });
        $('.swiper-wrapper').shapeshift({
          //selector: "*",
          // # Features
          // enableDrag: false,
          // enableCrossDrop: true
          enableResize: true,
          // enableTrash: false

          // # Grid Properties
          // align: "center"
          colWidth: 90,
          columns: 8,
          // minColumns: 1
          // autoHeight: true
          maxHeight: 360,
          // minHeight: 100
          // gutterX: 10
          // gutterY: 10
          paddingX: 0, //10
          paddingY: 0, //10

          // # Animation
          animated: false,
          // animateOnInit: false
          // animationSpeed: 225
          // animationThreshold: 100

          // # Drag/Drop Options
          dragClone: true,
          //deleteClone: false,
          dragRate: 0, //100
          //dragWhitelist: "#drop-box",
          //crossDropWhitelist: "#drop-box",
          // cutoffStart: null
          // cutoffEnd: null
          // handle: false

          // # Customize CSS
          // cloneClass: "ss-cloned-child"
          // activeClass: "ss-active-child"
          // draggedClass: "ss-dragged-child"
          // placeholderClass: "ss-placeholder-child"
          // originalContainerClass: "ss-original-container"
          // currentContainerClass: "ss-current-container"
          // previousContainerClass: "ss-previous-container"
        });
      },
      watch: {
      },
      methods: {
      },
      components: {
        'drop-list-item': require('./form/drop-swiper'),
      }
    });

  }
}


