// memory game 
var pic=document.querySelectorAll('.animal');

let hasFlipped=false;
let firstCard, secondCard;


function flipCard(){
	this.classList.add('flip');
	if (!hasFlipped){
		// first click
		hasFlipped=true;
		firstCard=this; 		
	}else{
		// second ckick
		hasFlipped=false;
		secondCard=this;

		// do card match
		checkMatch();
		
	}
}

function checkMatch(){
	let isMatch=(firstCard.dataset.framework===
			secondCard.dataset.framework)

	isMatch?disableCard():unFlip();
}

function disableCard(){
	firstCard.removeEventListener('click',flipCard);
	secondCard.removeEventListener('click',flipCard);

}

function unFlip(){
	setTimeout(() =>{
					firstCard.classList.remove('flip');
					secondCard.classList.remove('flip');

			},500);
}


(function shuffle(){
	pic.forEach(pi=>{
		let randomPos=Math.floor(Math.random()*12);
		pi.style.order=randomPos;
	});
})();

pic.forEach(pi => pi.addEventListener('click',flipCard));

