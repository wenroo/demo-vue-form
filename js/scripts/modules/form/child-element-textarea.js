var childElement = require('./child-element');

module.exports = childElement.extend({
  template: '<textarea type="{{element.type}}"/>{{element.value}}</textarea>',
});
