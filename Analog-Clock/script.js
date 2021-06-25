var d,h,m,s,hdeg,ampm;

function adjustClock(){
	d = new Date();
	h = d.getHours();
	m = d.getMinutes();
	s = d.getSeconds();
	hdeg = h*30 + m/2 ; 
	if (h >=12){
		ampm="pm";
	}else{
		ampm="am";
	}
	hh.style.transform= "rotate("+hdeg+"deg)";
	mm.style.transform= "rotate("+m*6+"deg)";
	ss.style.transform= "rotate("+s*6+"deg)";
	ampms.innerText=ampm;


}
window.addEventListener("load", function(){
	setInterval(adjustClock,1000 );
});


var hhh=document.getElementById("hour");
var mmm=document.getElementById("minutes");
var sss=document.getElementById("seconds");
var hr,min,sec,ampm,ld;

function digitalClock(){
	ld=new Date();
	hr=ld.getHours();
	min=ld.getMinutes();
	sec=ld.getSeconds();

	hhh.innerText=hr;
	mmm.innerText=min;
	sss.innerText=sec;
}

window.addEventListener("load", function(){
	setInterval(digitalClock,1000);
})