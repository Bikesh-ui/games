var input=document.getElementById("inputs");
var button=document.getElementById("buttons");
var to=document.getElementById("toadd");




function go(){
	// var input=input.value;
	
	var values=input.value;
	if (values.length>0 ){
		var actual= values.match(/[aeiouAEIOU]/gi);
		var p=document.createElement("p");
		p.innerText=actual.length;
		to.appendChild(p);
		input.values="";
		consonants();

	} 
		
};

function consonants(){
	var values=input.value;
	if (values.length>0 ){
		var actual= values.match(/[^aeiouAEIOU]/gi);
		var p=document.createElement("p");
		p.innerText=actual.length;
		to.appendChild(p);
		input.values="";

	}
}

button.addEventListener("click",go);

