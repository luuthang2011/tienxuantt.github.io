window.lrmConfig = {
};
// Địa điểm khi mới vào
var map = L.map('map').setView([21.017695, 105.811214], 13.5);
L.tileLayer('https://vmap.vn/tiles/{z}/{x}/{y}.png', {}).addTo(map);

var IconPage = L.Icon.extend({
    options: {
        iconSize: [25, 25],	
    }
});
IconCurrent = new IconPage({ iconUrl: "../truongthpt/images/hs.png"});
for(var i = 0; i < hsarray1.length; i+=2){
    notifi = hsarray2[i/2] + "<br/> Địa chỉ: "+ hsarray3[i/2];
    L.marker([hsarray1[i+1], hsarray1[i]], {icon: IconCurrent}).bindPopup(notifi).addTo(map);
}
