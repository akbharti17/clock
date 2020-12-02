
function moveClock(){
	var hours;
	var minute;
	var second;

	var date=new Date();
	hours=date.getHours();
	minute=date.getMinutes();
	second=date.getSeconds();
    var time=date.toLocaleTimeString();
    var dt=date.toLocaleDateString();
    document.getElementById("time").innerHTML=time;
    document.getElementById("date").innerHTML=dt;
	var hDeg=hours*(30);
	var mDeg=minute*6;
	var sDeg=second*6;
	var hrs=hDeg+(mDeg/12);

	document.getElementById("hour").style.transform = "rotate("+hrs+"deg)";
	document.getElementById("minute").style.transform="rotate("+mDeg+"deg)";
	document.getElementById("second").style.transform="rotate("+sDeg+"deg)";

}

setInterval(moveClock,1000);