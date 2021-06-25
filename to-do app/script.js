const input=document.getElementById('inputs');
const button=document.getElementById('buttons');
const uls=document.querySelector("ul");

function inputLength(){
	return input.value.length;
}



button.addEventListener("click",function(){
	if(input.value.length>0){
		var li=document.createElement("li");
		li.innerText=input.value;
		uls.appendChild(li);	
		input.value="";	
		li.addEventListener("click",function(){
			li.classList.toggle("yoyo");
		});
		li.addEventListener("dblclick",function(){
			li.remove();
		});
	}
		

});


input.addEventListener("keypress",function(event){
	if(inputLength()>0 && event.keyCode === 13){
		var li=document.createElement("li");
		li.innerText=input.value;
		uls.appendChild(li);	
		input.value="";	
		li.addEventListener("click",function(){
			li.classList.toggle("yoyo");
		});
		li.addEventListener("dblclick",function(){
			li.remove();
		});
	}
});






