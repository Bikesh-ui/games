(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}]},{},[1]);
