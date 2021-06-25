var block = document.getElementById("block");
var block1 = document.getElementById("block1");
var block2 = document.getElementById("block2");
var character = document.getElementById("character");

var jumping=0;
var counter=0;

block.addEventListener('animationiteration',() =>{
	var ran=((Math.random()*300)+ 170);
	block.style.top=ran + "px";
	counter ++;

});

block1.addEventListener('animationiteration',() =>{
	var ran=((Math.random()*300)+ 170);
	block1.style.top=ran + "px";

});


setInterval(function(){
	var characterTop=parseInt(window.getComputedStyle(character)
		.getPropertyValue("top"));
	if (characterTop<330){
		character.style.top=(characterTop+3) + "px";
	}

	var blockRight=parseInt(window.getComputedStyle(block).getPropertyValue("right"));
	var blockLeft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
	var blockTop=parseInt(window.getComputedStyle(block).getPropertyValue("top"));
	var blockBottom=parseInt(window.getComputedStyle(block).getPropertyValue("bottom"));

	var cTop=parseInt(window.getComputedStyle(character).getPropertyValue("top"));
	var cRight=parseInt(window.getComputedStyle(character).getPropertyValue("right"));
	var cLeft=parseInt(window.getComputedStyle(character).getPropertyValue("left"));
	var cBottom=parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));
	
	// if (((blockLeft>cRight)&&(blockLeft <cLeft))&&((blockTop<characterTop)&&(blockBottom>characterBottom))){
	// ((cTop<holeTop)||(cTop>holeTop+130))
	if ((blockLeft<cLeft)&&(cRight<blockRight)){
	// if (((blockLeft<cLeft)||(cRight<blockRight))||((cTop>blockTop)&&(cTop<blockBottom))){

		alert("game Over. total score:" + counter);
		character.style.top= 100 +"px";
		counter = 0;
	}

},20);

function jump(){
	jumping=1;
	let jumpCount=0;
	var jumpInterval= setInterval(function(){
		var characterTop=parseInt(window.getComputedStyle(character)
		.getPropertyValue("top"));
		character.style.top=(characterTop -5) + "px";
		if (jumpCount>20){
			clearInterval(jumpInterval);
			jumping=0;
			jumpCount=0;
		}
		jumpCount ++;
	},20);
	
}