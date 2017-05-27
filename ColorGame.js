function random(min, max){
	return Math.floor(Math.random()*(max-min+1))+min;}

var r=random(0,255);
var g=random(0,255);
var b=random(0,255);

for(i=0; i<6;i++){
	var sqr=document.getElementsByClassName("square")[i];
	sqr.style.backgroundColor=("rgb("+random(0,255)+","+random(0,255)+","+random(0,255)+")");
	sqr.addEventListener("click", function(){
		this.style.backgroundColor="#232323";
	});
}

var correctbox=document.getElementsByClassName("square")[random(0,5)];
var correctrgb=correctbox.style.backgroundColor;

correctbox.addEventListener("click", function(){
	this.style.backgroundColor=correctrgb;

	for(u=0; u<6;u++){
	var sqr=document.getElementsByClassName("square")[u];
	sqr.style.backgroundColor=correctrgb;
	h1=document.querySelector("h1");
	h1.style.backgroundColor=correctrgb;}
});	


var h2=document.querySelector("h2");
h2.textContent=correctrgb;