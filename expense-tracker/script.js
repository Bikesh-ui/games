var input=document.getElementById("name");
var date=document.getElementById("date");
var amount=document.getElementById("amount");
var button=document.getElementById("btn");
var table=document.getElementsByTagName("table")[0];


button.addEventListener("click",()=>{
	if(input.value.length>0){
		var newRow = table.insertRow();
		cell1=newRow.insertCell(0);
		cell1.innerText=input.value;
		cell2=newRow.insertCell(1);
		cell2.innerText=date.value;
		cell3=newRow.insertCell(2);
		cell3.innerText=amount.value;
		cell4=newRow.insertCell(3);
		cell4.innerText="delete";

		input.value="";
		amount.value=0;	

		let cells=[cell1,cell2,cell3];
		cells.forEach((cell)=>{
			cell.addEventListener("click",()=>{
				// cells.classList.toggle("tog");
				newRow.classList.toggle("tog");
						})
		})

		cell4.addEventListener("click",()=>{
			newRow.remove();

		})


}
	
});



