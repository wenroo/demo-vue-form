var _ = require('underscore'),
    moment = require('moment'),
    View = require('vue'),
    //ViewAsyncData = require('vue-async-data'),
    store = require('../../../bower_components/store-js/store');

//View.use(ViewAsyncData);
View.config.devtools = false;
View.config.debug = true;

//UI

var draglist = {
  'options':{
    'group': {
      'name': 'dragdrop',
      'pull': false,
      'put': true
    },
    'animation': 150
  },
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
  ],
};
var droplist = {
  'options':{
    'sort':false,
    'group': {
      'name': 'dragdrop',
      'pull': 'clone',
      'put': false,
    },
    'animation': 150
  },
  'items' : [
  {
    'name' : '2*2整块',
    'preview': './images/droplist/001.jpg',
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
        'draglist': draglist,
        'droplist': droplist,
      },
      init: function(){
      },
      created: function(){
        var self = this;
      },
      ready: function() {
        console.log('in');
      },
      watch: {
      },
      methods: {
      },
      components: {
        'drag-clone': require('./form/drag-clone'),
        'drag-drop': require('./form/drag-drop'),
      }
    });

  }
}


