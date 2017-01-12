var childElement = require('./child-element');

module.exports = childElement.extend({
  template: '<select type="{{element.type}}"/>{{element.value}}</select>',
});
