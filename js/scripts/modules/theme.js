var _ = require('underscore'),
    moment = require('moment'),
    View = require('vue'),
    //ViewAsyncData = require('vue-async-data'),
    store = require('../../../bower_components/store-js/store');

//View.use(ViewAsyncData);
View.config.devtools = false;
View.config.debug = true;


var demoData = {
  'elements': [
    {
      'id':'from-region-title',
      'label': '标题',
      'type' : 'text',
      'value': 'default val',
      'attributes': {
        'class': [
          'form-text',
        ],
        'placeholder':'请输入标题',
        'weight':0,
      },
    },
    {
      'id':'from-region-file',
      'label': '图标',
      'type' : 'file',
      'attributes':{
        'class': [
          'form-file',
        ],
        'weight':1,
      }
    },
    {
      'id':'from-region-body',
      'label': '描述',
      'type' : 'textarea',
      'attributes':{
        'class': [
          'form-textarea',
        ],
        'weight':2,
      }
    },
    {
      'id':'from-region-score',
      'label': '默认评分',
      'type' : 'radio',
      'value': '1',
      'attributes':{
        'class': [
          'form-radio',
        ],
        'weight':3,
      },
      'options':[
        { 'text':'一颗星', 'value':'1'},
        { 'text':'两颗星', 'value':'2'},
        { 'text':'三颗星', 'value':'3'},
        { 'text':'四颗星', 'value':'4'},
        { 'text':'五颗星', 'value':'5'},
      ]
    },
    {
      'id':'from-region-score-show',
      'label': '是否显示评分',
      'type' : 'radio',
      'value': '1',
      'attributes':{
        'class': [
          'form-radio',
          'form-radio-base'
        ],
        'weight':4,
      },
      'options':[
        { 'text':'显示', 'value':'1'},
        { 'text':'不显示', 'value':'2'},
      ]
    },
  ]
};

module.exports = {
  init:function(data){
    var that = this;

    this.content = new View({
      el:'#page',
      template: '',
      data: {
        'title': '编辑区域',
        'date' : moment().format('YYYY-MM-DD'),
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
      // createElement:function(el){
      //   template: '<textarea v-model="message" placeholder="add multiple lines"></textarea>';
      // }
      },
      components: {
        'form-group': formGroup
      }
    });

    var formGroup = new View({
      'el':'#form-group-element',
      'template':'\
<form class="form-group">\
<div v-for="element in elements" class="form-item outside">\
<label>{{element.label}}: </label>\
<component :is="\'element-\' + element.type" :element="element" :items="element.items"/>\
</div></form>',
      data: demoData,
      init: function(){
      },
      created: function(){
      },
      ready: function(){
      },
      components: {
        'element-text': require('./form/child-element-text'),
        'element-file': require('./form/child-element-file'),
        'element-radio': require('./form/child-element-radio'),
        'element-select': require('./form/child-element-select'),
        'element-textarea': require('./form/child-element-textarea'),
      },
    });


  }
}


