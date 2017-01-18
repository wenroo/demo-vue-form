var View     = require('vue'),
		Sortable = require('../../../../bower_components/Sortable/Sortable');

module.exports = View.extend({
	template: '#drag-drop-template',
	props: {
		'collection': Object,
	},
	// data:function(){
	// 	return {
	// 		'collection':{
	// 			'items': Array,
	// 		}
	// 	}
	// },
  init: function(){
  },
  created: function(){
  },
  ready: function(){
		var dropBox = document.getElementById('drop-box');
		Sortable.create(dropBox, {
			group: {
				name: 'dragdrop',
				pull: false,
				put: true
			},
			animation: 150
		});
  },
	methods: {
    onUpdate: function (event) {
    	console.log(event);
      this.list.splice(event.newIndex, 0, this.collection.items.splice(event.oldIndex, 1)[0])
    }
  }
});
