function random(min, max){
	return Math.floor(Math.random()*(max-min+1))+min;}

var r=random(0,255);
var g=random(0,255);
var b=random(0,255);

for(i=0; i<6;i++){
	var sqr=document.getElementsByClassName("square")[i];
	sqr.style.backgroundColor=("rgb("+random(0,255)+","+random(0,255)+","+random(0,255)+")");

}

var correctbox=document.getElementsByClassName("square")[random(0,5)];
var correctrgb=correctbox.style.backgroundColor;