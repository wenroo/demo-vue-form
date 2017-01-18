var View = require('vue');
var Swiper = require('../../../../bower_components/swiper/dist/js/swiper.jquery');

module.exports = View.extend({
	props: {
		'model': Object,
	},
	template: '#drop-list-item-template',
  init: function(){
  },
  created: function(){
  },
  ready: function(){
		// console.log(this);
		// this.mySwiper = new Swiper ('#drop-swiper', {
		//     // Optional parameters
		//     direction: 'horizontal',
		//     slidesPerView : 'auto',
		//     //loop: true,
		//     // preventClicks : false,
		//     //noSwiping : true,
		//     swipeHandler : '.title',
		//     // If we need pagination
		//     //pagination: '.swiper-pagination',

		//     // Navigation arrows
		//     nextButton: '.drop-list-left',
		//     prevButton: '.drop-list-right',

		//     // And if we need scrollbar
		//     //scrollbar: '.swiper-scrollbar',
		// })
  }
});
