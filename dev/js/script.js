
 $(".owl-carousel").owlCarousel({
    items:1,
     dots:true,
     nav:false

});

 var rangeTo = document.querySelector(".catalog-content__range-to"),
 	 rangeFrom = document.querySelector(".catalog-content__range-from"),
 	 filledLine = document.querySelector(".catalog-content__filled-line"),
 	 inputFrom = document.querySelector("#range-from"),
 	 inputTo = document.querySelector("#range-to"),
 	 rangeToDimensions = rangeTo.getBoundingClientRect(),
 	 rangeFromDimensions = rangeFrom.getBoundingClientRect(),
 	 progressBar = document.querySelector(".catalog-content__progress-bar"),
 	 rangeLine = document.querySelector(".catalog-content__range-line"),
 	 rangeLineDimensions = rangeLine.getBoundingClientRect(),
 	 valueTo,valueFrom,
 	 allValue = rangeLineDimensions.right - rangeLineDimensions.left -20;
 	 allValuePercent = Math.ceil(allValue/100),
 	 maxValue = 15000,
 	 maxValuePercent = Math.ceil(maxValue/100);

 	 console.log(allValuePercent);
 	 


 	 rangeTo.addEventListener("mousedown",function(e){
 	 	rangeTo.style.left = e.clientX-rangeLineDimensions.left-10+"px";
 	 	rangeToDimensions = rangeTo.getBoundingClientRect();
 	 	rangeFromDimensions = rangeFrom.getBoundingClientRect();
 	 	valueTo = (rangeToDimensions.right - rangeLineDimensions.left -10)/allValuePercent*maxValuePercent;
 	 	inputTo.value = Math.ceil(valueTo);
 	 	if (inputTo.value > maxValue){
 	 		inputTo.value = maxValue;
 	 	}
 	 	if(inputTo.value < (rangeFromDimensions.right - rangeLineDimensions.left -10)/allValuePercent*maxValuePercent){
 	 	  inputTo.value =(rangeFromDimensions.right - rangeLineDimensions.left -10)/allValuePercent*maxValuePercent;
 	 	}
 	 	if (e.clientX<rangeLineDimensions.right){
 	 		filledLine.style.width = rangeToDimensions.left - rangeFromDimensions.left + "px";
 	 	}
 	 	
 	 	if (rangeLineDimensions.right < e.clientX){
 	 		rangeTo.style.left = rangeLineDimensions.right-rangeLineDimensions.left - 10+"px";
 	 	}
 	 	if (rangeFromDimensions.right > rangeToDimensions.left){
 	 		rangeTo.style.left = rangeFromDimensions.right-rangeLineDimensions.left +"px";
 	 	}
 	 	progressBar.onmousemove = function(e) {
		    rangeTo.style.left = e.clientX-rangeLineDimensions.left-10+"px";
		    rangeToDimensions = rangeTo.getBoundingClientRect(),
 	 		rangeFromDimensions = rangeFrom.getBoundingClientRect();
 	 		valueTo = (rangeToDimensions.right - rangeLineDimensions.left -10)/allValuePercent*maxValuePercent;
 	 		inputTo.value = Math.ceil(valueTo);
 	 		if (inputTo.value > maxValue){
 	 		inputTo.value = maxValue;
 	 		}
 	 		if(inputTo.value < (rangeFromDimensions.right - rangeLineDimensions.left -10)/allValuePercent*maxValuePercent){
 	 	  inputTo.value =(rangeFromDimensions.right - rangeLineDimensions.left -10)/allValuePercent*maxValuePercent;
 	 	}
		    if (e.clientX<rangeLineDimensions.right){
 	 		filledLine.style.width = rangeToDimensions.left - rangeFromDimensions.left + "px";
 	 	}
		    if (rangeLineDimensions.right < e.clientX){
 	 		rangeTo.style.left = rangeLineDimensions.right-rangeLineDimensions.left - 10+"px";
 	 		}
 	 		if (rangeFromDimensions.right > rangeToDimensions.left){
 	 		rangeTo.style.left = rangeFromDimensions.right-rangeLineDimensions.left +"px";
 	 	}
		  }
 	 	document.addEventListener("mouseup",function(){
 	 		progressBar.onmousemove = null;
 	 	})
 	 	
 	 })


 	  rangeFrom.addEventListener("mousedown",function(e){
 	 	if ((e.clientX > rangeLineDimensions.left)&&(e.clientX < rangeToDimensions.left)){
 	 			rangeFrom.style.left = e.clientX-rangeLineDimensions.left-10+"px";
	 	 	rangeToDimensions = rangeTo.getBoundingClientRect(),
	 	 	rangeFromDimensions = rangeFrom.getBoundingClientRect(),
	 	 	filledLine.style.width = rangeToDimensions.left - rangeFromDimensions.left + "px";
	 	 	filledLine.style.left = rangeFromDimensions.left-rangeLineDimensions.left +10 +"px";
	 	 	valueFrom = (rangeFromDimensions.left - rangeLineDimensions.left)/allValuePercent*maxValuePercent;
 	 		inputFrom.value = Math.ceil(valueFrom);
 	 		if (inputFrom.value < 0){
 	 		inputFrom.value = 0;
 	 		}
 	 		if(inputFrom.value > (rangeToDimensions.left - rangeLineDimensions.left -10)/allValuePercent*maxValuePercent){
 	 	  inputFrom.value =(rangeToDimensions.left - rangeLineDimensions.left -10)/allValuePercent*maxValuePercent;
 	 	}
	 	 	if (rangeLineDimensions.left> e.clientX){
 	 		rangeFrom.style.left = 0 +"px";
 	 		}
	 	 	if (rangeFromDimensions.right > rangeToDimensions.left){
	 	 		rangeFrom.style.left = rangeToDimensions.left-rangeLineDimensions.left -20 +"px";
	 	 	}
 	 		}
		   

 	 	progressBar.onmousemove = function(e) {
 	 		if ((e.clientX > rangeLineDimensions.left)&&(e.clientX < rangeToDimensions.left)){
 	 			rangeFrom.style.left = e.clientX-rangeLineDimensions.left-10+"px";
	 	 	rangeToDimensions = rangeTo.getBoundingClientRect(),
	 	 	rangeFromDimensions = rangeFrom.getBoundingClientRect(),
	 	 	filledLine.style.width = rangeToDimensions.left - rangeFromDimensions.left + "px";
	 	 	filledLine.style.left = rangeFromDimensions.left-rangeLineDimensions.left +10 +"px";
	 	 	valueFrom = (rangeFromDimensions.left - rangeLineDimensions.left)/allValuePercent*maxValuePercent;
 	 		inputFrom.value = Math.ceil(valueFrom);
 	 		if (inputFrom.value < rangeLineDimensions.left){
 	 		inputFrom.value = 0;
 	 		}
 	 		if(inputFrom.value > (rangeToDimensions.left - rangeLineDimensions.left -10)/allValuePercent*maxValuePercent){
 	 	  inputFrom.value =(rangeToDimensions.left - rangeLineDimensions.left -10)/allValuePercent*maxValuePercent;
 	 	}
	 	 	if (rangeLineDimensions.left> e.clientX){
 	 		rangeFrom.style.left = 0 +"px";
 	 		}
	 	 	if (rangeFromDimensions.right > rangeToDimensions.left){
	 	 		rangeFrom.style.left = rangeToDimensions.left-rangeLineDimensions.left -20 +"px";
	 	 	}
 	 		}
		   
		  }
 	 	document.addEventListener("mouseup",function(){
 	 		progressBar.onmousemove = null;
 	 	})
 	 	
 	 })


 
 function initialize() {

 var latlng = new google.maps.LatLng(59.9385858,30.3224018);
 var centerMap = new google.maps.LatLng(59.938872, 30.319210);
 var info = new google.maps.LatLng(59.938928, 30.317591);
 var settings = {
 zoom: 17,
 center: centerMap,
 scrollwheel: false,
 mapTypeControl: true,
 mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
 navigationControl: true,
 navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
 mapTypeId: google.maps.MapTypeId.MAP
 };
 var map = new google.maps.Map(document.getElementById("map_canvas"), 
settings);
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

