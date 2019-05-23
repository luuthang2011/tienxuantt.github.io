/**
 * Cần import secondarySchoolData.js
 */
function getDistance(lat1, lon1, lat2, lon2) {
	var R = 6371; // Radius of the earth in km
	var dLat = deg2rad(lat2 - lat1); // deg2rad below
	var dLon = deg2rad(lon2 - lon1);
	var a =
		Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
		Math.sin(dLon / 2) * Math.sin(dLon / 2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	var d = R * c; // Distance in km
	return d;
}

function deg2rad(deg) {
	return deg * (Math.PI / 180)
}

function secondarySchool(lat, lon){
	var lat1= lat;
	var lon1= lon;
	var range=[0.2,0.5,1,2,5];
	var scoreInRange=[10,8,6,5,4];
	var numInRange=[0,0,0,0,0];
	
	for(var i=0; i< secodarySchoolArray.length; i+=2 ){
		var lat2 = secodarySchoolArray[i];
		var lon2 = secodarySchoolArray[i+1];
		var distance =  getDistance(lat1,lon1,lat2,lon2);
		for(var j=0; j< range.length; j++){
			if(distance <= range[j]){
				numInRange[j] = numInRange[j]+1;
				break;
			}
		}
	}

	var total=0;
	for(var i=0; i< range.length; i++){
		total= total+ numInRange[i];
	}
	var lastIndex= secodarySchoolArray.length-total;
	var score= 0;
	for(var i=0; i< range.length;i++){
		score= score+ scoreInRange[i]*numInRange[i];
	}
	var firstIndex;
	var	temp = score/total; 
		if((numInRange[0]==0) && (numInRange[1]==0)) temp-=2;
		firstIndex= [Math.round(temp)];
	return firstIndex.concat(numInRange).concat([lastIndex])
}


function nhom11Ranking(lat, lng){
		var secondarySchoolRankingt = secondarySchool(lng,lat);
		
		$(".secondarySchoolRanking1").text(secondarySchoolRankingt[0] + "/5");
		$(".secondarySchoolRanking2").text(secondarySchoolRankingt[1]);
		$(".secondarySchoolRanking3").text(secondarySchoolRankingt[2]);
		$(".secondarySchoolRanking4").text(secondarySchoolRankingt[3]);
		$(".secondarySchoolRanking5").text(secondarySchoolRankingt[4]);
		$(".secondarySchoolRanking6").text(secondarySchoolRankingt[5]);
}