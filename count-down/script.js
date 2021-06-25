
const da= document.getElementById('day');
const hr= document.getElementById('hour');
const mi= document.getElementById('minute');
const se= document.getElementById('second');

const newYear="1 jan 2022";


function countdown(){
	const curentDate= new Date();
	const newEve= new Date(newYear);
	const totalSec=(newEve - curentDate)/1000;
	const sec=Math.floor((newEve - curentDate)/1000)%60;
	const min=Math.floor(totalSec/60)%60;
	const hour=Math.floor(totalSec/3600)%24;
	const days= Math.floor(totalSec/60/60/24);

	da.innerHTML=days;
	hr.innerHTML=hour;
	mi.innerHTML=min;
	se.innerHTML=formatTime(sec);
}

function formatTime(times){
	return times < 10 ? (`0${times}`):times;
}

countdown();
setInterval (countdown,1000);



