$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:1,
     dots:true,
     nav:false
     
  });

});
 function initialize() {

 var latlng = new google.maps.LatLng(59.9385858,30.3224018);
 var centerMap = new google.maps.LatLng(59.938872, 30.319210);
 var info = new google.maps.LatLng(59.938928, 30.317591);
 var settings = {
 zoom: 17,
 center: centerMap,
 mapTypeControl: true,
 mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
 navigationControl: true,
 navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
 mapTypeId: google.maps.MapTypeId.MAP
 };
 var map = new google.maps.Map(document.getElementById("map_canvas"), 
settings);
//  var contentString = '<div id="content">'+
// '<div id="siteNotice">'+
// '</div>'+
// '<h1 id="firstHeading" class="firstHeading">Nerds Disign Studio</h1>'+
// '<div id="bodyContent">'+
// '<p>191186, Санкт-Петербург,ул. <br>Б. Конюшенная, д. 19/8</p>'+
// '<p>тел. +7 (812) 275-75-75</p>'+
// '<a class="btn web-btn">напишите нам</a>'+
// '</div>'+
// '</div>';

// var infowindow = new google.maps.InfoWindow({
// position: info,
// content: contentString,

// });
 var companyLogo = new google.maps.MarkerImage('img/circle.png',
new google.maps.Size(180,200),
new google.maps.Point(0,0),
new google.maps.Point(0,180)
);

var companyPos = new google.maps.LatLng(59.9385858,30.3224018);
var companyMarker = new google.maps.Marker({
position: companyPos,
map: map,
icon: companyLogo,
});
google.maps.event.addListener(companyMarker, 'click', function() {
infowindow.open(map,companyMarker);
});
};
