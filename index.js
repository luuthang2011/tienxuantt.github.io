
$(document).ready(function () {
	var count = 0;
	$(".icon-show").click(function(){
		$(".show-ranking").toggle();
	});
	$(".icon-hide").click(function(){
		$(".icon-hide, .show-ranking").hide();
	});
	var theMarker = {};
	map.on('click', function (e) {
		$(".icon-hide, .show-ranking").show();
		let lat = e.latlng.lat;
		let lng = e.latlng.lng;
		if (count > 0) {
			map.removeLayer(theMarker);
		};
		theMarker = L.marker([lat,lng]).addTo(map);  
	 	count++;
		ShowQuantityMap17(lng,lat);
		nhom12Ranking(lat, lng);
		nhom8Ranking(lat, lng);
		nhom5Ranking(lat, lng);
		nhom6Ranking(lat, lng);
		nhom9Ranking(lat, lng); 
		nhom9Function(lat, lng);
		nhom10Ranking(lat, lng);
		nhom11Ranking(lat, lng);
		nhom14Ranking(lat, lng);
		nhom16Ranking(lat, lng);
		displayCinemaScoring(lat, lng);
	});
});
function Nhom1234(x,y){
	diem1 = getResultMarker(y1, x1).toFixed(0);
	diem2 = getResultMarker_Nhom_2(x, y);
	diem3 = getResultMarker_Nhom_3(x, y);
	diem4 = getResultMarker_Nhom_4(x, y);
}
