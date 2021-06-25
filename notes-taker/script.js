var input=document.getElementById("in")
var button=document.getElementById("bt");
var hhh=document.getElementById("hh");
var adding =document.getElementById("adding");
// var seccondButton=document.getElementById("bt2")
var modal=document.getElementById("mymodal");
var h2=document.getElementById("h2");
var spanclass=document.getElementById("close");



button.addEventListener("click",function(){
	if (input.value.length >0){
		var notes=document.createElement("h2");
		notes.innerText="Note";
		h2.appendChild(notes);
		var pp=document.createElement("p");
		pp.innerText=input.value;
		adding.appendChild(pp);
		var secondButton=document.createElement("button");
		secondButton.innerText="open";
		adding.appendChild(secondButton);
		input.value="";

		secondButton.addEventListener("click",function(){
			var ppp=document.getElementById("secondAdding");
			ppp.innerText=pp.innerText;
			// input.value="";
			modal.style.display="block";
			// ppp.classList.add("modal");
		});	
		spanclass.addEventListener("click",function(){
				modal.style.display="none";
		});
	}
});


input.addEventListener("keypress",function(event){
	if (input.value.length >0 && event.keyCode===13){
		var notes=document.createElement("h2");
		notes.innerText="Note";
		h2.appendChild(notes);
		var pp=document.createElement("p");
		pp.innerText=input.value;
		adding.appendChild(pp);
		var secondButton=document.createElement("button");
		secondButton.innerText="open";
		adding.appendChild(secondButton);
		input.value="";

		secondButton.addEventListener("click",function(){
			var ppp=document.getElementById("secondAdding");
			ppp.innerText=pp.innerText;
			// input.value="";
			modal.style.display="block";
			// ppp.classList.add("modal");
		});	
		spanclass.addEventListener("click",function(){
				modal.style.display="none";
		});
	}
});

