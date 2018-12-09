$(".slider-1").slick({
	dots: true,
	arrows: false,
	infinite: true,
	slide: "div",
	slidesToSceoll: 1,
	autoplay: true,
	autoplaySpeed: 4000
});

$(document).ready(function(){

    $(".scroll__button").on("click","a", function (event) {

        event.preventDefault();

        var id  = $(this).attr('href'),

            top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1500);
	});
});

// Initialize and add the map
$(window).load(function initMap(){

  // The location of Uluru
  var uluru = {lat: 48.928810, lng: 24.696850};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({
  	position: uluru,
  	map: map,
  	icon: "img/favicon.png"});
});

 function useIsotope(event) {

     // init Isotope
     let isotopeGrid = new Isotope( '.grid', {
         itemSelector: '.grid-item',
         masonry: {
             // use element for option
             columnWidth: '.grid-item',
             itemSelector: '.grid-item',
             transitionDuration: '0.5s',
             gutter: 8,
             horizontalOrder: true,
             isFitWidth: true
         }
     });

     let applyFilterFromLink = (linkObject) => {
         let filterValue = linkObject.dataset.filter;
         isotopeGrid.arrange({ filter: filterValue });
     };

     let filterGrid = function( event ) {
         event.preventDefault();
         applyFilterFromLink(this);
         let activeBtn = document.querySelector('.ba-active-filter');
         if (activeBtn) {
             activeBtn.classList.remove('ba-active-filter');
         }
         this.classList.add('ba-active-filter');
     };

     document.querySelectorAll('.filter__button').forEach(filterBtn => {
         filterBtn.addEventListener( 'click', filterGrid);
     });

     let activeBtn = document.querySelector('.ba-active-filter');
     applyFilterFromLink(activeBtn);
 }
 document.addEventListener('DOMContentLoaded', useIsotope);



