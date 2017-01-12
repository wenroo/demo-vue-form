var childElement = require('./child-element');

module.exports = childElement.extend({
  template: '<div class="form-radios clearfix" id="{{element.id}}">\
<label  v-for="item in element.options" for="{{element.id}}-{{item.value}}" class="inside-min-tb d_b f-l outside-min-r">\
<input id="{{element.id}}-{{item.value}}" name="{{element.id}}" class="" type="{{element.type}}" value="{{item.value}}"/>\
 {{item.text}}</label>\
</div>',
	data:function(){
		return {
			'selected' : this.element.value
		}
	}
});
