$(".slider").slick({
	dots: true,
	arrows: false,
	infinite: true,
	slide: "div",
	slidesToSceoll: 1,
	autoplay: true,
	autoplaySpeed: 4000
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

// init Isotope

function filterHTML(){
	$("#html").css("border","10px solid red");
}
function filterWeb(){
	$("#web").css("border","10px solid red");
}
function filterBranding(){
	$("#branding").css("border","10px solid red");
}
function filterPrint(){
	$("#print").css("border","10px solid red");
}
