var View     = require('vue'),
		Swiper   = require('../../../../bower_components/swiper/dist/js/swiper.jquery'),
		Sortable = require('../../../../bower_components/Sortable/Sortable');

module.exports = View.extend({
	template: '#drag-clone-template',
	props: {
		'collection': Object,
	},
  init: function(){
  },
  created: function(){
  },
  ready: function(){
		this.dragSwiper = new Swiper('.swiper-container', {
		    // Optional parameters
		    direction: 'horizontal',
		    slidesPerView : 'auto',
		    //loop: true,
		    // preventClicks : false,
		    //noSwiping : true,
		    swipeHandler : '.title',
		    // If we need pagination
		    //pagination: '.swiper-pagination',

		    // Navigation arrows
		    nextButton: '.drag-swiper-left',
		    prevButton: '.drag-swiper-right',

		    // And if we need scrollbar
		    //scrollbar: '.swiper-scrollbar',
		});

		var dragBox = document.getElementById('drag-box');
		Sortable.create(dragBox, {
			sort:false,
			group: {
				name: 'dragdrop',
				pull: 'clone',
				put: false,
			},
			animation: 150
		});
  },
  components: {
    'swiper-slide': require('../dragdrop/swiper-slide'),
  }
});
