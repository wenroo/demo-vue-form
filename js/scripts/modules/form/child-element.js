var  View = require('vue');

module.exports = View.extend({
	props: ['element'],
  init: function(){
    console.log(this);
  },
});
