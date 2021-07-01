const canvas= document.querySelector("canvas");

const c= canvas.getContext('2d');

canvas.height=800;
canvas.width=800;

class Bird{
	constructor(x,y,radius,color,gravity,velocity){
		this.x=x ;
		this.y=y;
		this.radius=radius;
		this.color=color;
		this.gravity=gravity;
		this.velocity=velocity;
	
	}
	draw(){

		c.beginPath();
		c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
		c.fillStyle=this.color;
		c.fill();
	}
	update(){
		c.clearRect(0,0,canvas.width,canvas.height);
		this.draw();
		this.velocity +=this.gravity;
		this.y += this.velocity;
		if (this.y >canvas.height){
			this.velocity=0;
			this.y=(canvas.height)  ;

		}
		if (this.y <0){
			this.velocity=0;
			this.y=0;

		}
	}
	lift(){
		c.clearRect(0,0,canvas.width,canvas.height);
		this.draw();
		this.velocity -=this.gravity*10;
		this.y -= this.velocity;
	}
}

class Pipe {
	constructor(tops,bottoms,xr,color){
		this.tops=tops;
		this.bottoms=bottoms;
		this.xr=xr;
		this.color=color;
		this.speed=5;
	}
	line(){
		// c.clearRect(0,0,canvas.width,canvas.height);
		
		c.beginPath();
		c.fillStyle=this.color;
		c.fillRect(this.tops,0,this.xr,this.bottoms);
		
		c.beginPath();
		c.fillStyle=this.color;
		c.fillRect(this.tops,500,this.xr,this.bottoms);
	}
	updated(){
		// c.clearRect(0,0,canvas.width,canvas.height);

		this.line();		
		this.speed=5 ;
		this.tops -= this.speed;
		if (this.tops<0){
			this.tops=800;
	}

}
}

const gravity= 2;
const velocity=0; 
const x=60;

const bird=new Bird(x,canvas.height/2,20,"blue",gravity,velocity);
	
setInterval(()=> {
	bird.update();

},100);

const tops= 800;
const bottoms=(canvas.height/2);
const xr= 20;

let pipes=[];

addEventListener("keypress",function(e){
	if (e.keyCode===32){
		console.log("bikesh");
		bird.lift();
	}
})

setInterval(()=>{
	pipes.push(new Pipe(tops,bottoms,xr,"red"));
},10000)



// function animate(){
	// animationId=requestAnimationFrame(animate);
	setInterval(()=>{
		pipes.forEach((pipe,index)=>{
		pipe.updated();
		const dist = Math.hypot(bird.x-pipe.tops)
		if (dist <1 ){
			console.log("bikesh you cant do it man ")
			pipes.splice(0,pipes.length);
			
		}

		})
	},100)

// }
// animate();






