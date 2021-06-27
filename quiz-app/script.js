const quizData=[
	{
		question:"How old is Nepal",
		a: '10',
		b: '20',
		c: '30',
		d: '40',
		correct: 'c'
	},{
		question : "who is the king of Nepal?",
		a: 'Bikesh',
		b: 'apelshya',
		c: 'Bimala',
		d: 'Sushan',
		correct: 'a'
	},{
		question: "London is .....",
		a: 'White',
		b: 'Blue',
		c: 'Red',
		d: 'Green',
		correct: 'c'
	},{	
		question: "who is the best player in the world?",
		a: 'leo Messi',
		b: 'Injuried  Messi',
		c: 'Midfiled Messi',
		d: 'All of the above',
		correct: 'd'
	}
];

const questions=document.getElementById("questions");
const atext=document.getElementById("atext");
const btext=document.getElementById("btext");
const ctext=document.getElementById("ctext");
const dtext=document.getElementById("dtext");
const button=document.getElementById("button");
const container=document.getElementById("container");




let currentQuiz=0;
let score = 0;

loadQuiz();

function loadQuiz(){
	const currentQuizData = quizData[currentQuiz];
	questions.innerText=currentQuizData.question;
	atext.innerText=currentQuizData.a;
	btext.innerText=currentQuizData.b;
	ctext.innerText=currentQuizData.c;
	dtext.innerText=currentQuizData.d;

}

function getSelected(){
	const answerEls=document.querySelectorAll('.answer');
	let answer=undefined;
	answerEls.forEach((answerEl)=>{
		if (answerEl.checked){
			answer=answerEl.id;
		}
	});
	return answer;


}

function deselectAnswers(){
	answerEls.forEach((answerEl)=>{
		answerEl.checked=false;
	});
}


button.addEventListener("click",()=>{

	const answer = getSelected();

	if (answer){
		if (answer===quizData[currentQuiz].correct){
			score ++;
		}
		currentQuiz ++;
		
		if (currentQuiz<quizData.length){
		loadQuiz();
		}else{
		container.innerHTML=`<h1> You answered ${score}/${quizData.length} quesitons</h2>`
	}
	}

})












