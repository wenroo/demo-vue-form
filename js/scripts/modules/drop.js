var _ = require('underscore'),
    moment = require('moment'),
    View = require('vue'),
    //ViewAsyncData = require('vue-async-data'),
    store = require('../../../bower_components/store-js/store');

//View.use(ViewAsyncData);
View.config.devtools = false;
View.config.debug = true;


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


