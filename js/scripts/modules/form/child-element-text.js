var childElement = require('./child-element');

module.exports = childElement.extend({
  template: '<input type="{{element.type}}" class="form-text" value="{{element.value}}" />',
});
