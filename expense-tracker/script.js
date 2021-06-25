
var names=document.getElementById('name');
var date=document.getElementById('date');
var amount=document.getElementById('amount');
var table=document.getElementsByTagName('table')[0];


var button=document.getElementById('add');


function addingEvent(){
	if (names.value.length>0 && amount.value>0){
	var newRow=table.insertRow(1);
	var cell1=newRow.insertCell(0);
	var cell2=newRow.insertCell(1);
	var cell3=newRow.insertCell(2);
	var cell4=newRow.insertCell(3);

	cell1.innerText=names.value;
	cell2.innerText=date.value;
	cell3.innerText=amount.value;
	cell4.innerText="Delete"
	names.value="";
	amount.value=0;	
	 cell1.addEventListener("click",function(){
	 	cell1.classList.toggle("tog");
	 	cell2.classList.toggle("tog");
	 	cell3.classList.toggle("tog");
	 	cell4.classList.toggle("tog");
	 });
	 cell4.addEventListener("click",function(){
	 	cell1.remove();
	 	cell2.remove();
	 	cell3.remove();
	 	cell4.remove();

	 });

	}

}



button.addEventListener("click",addingEvent);




	