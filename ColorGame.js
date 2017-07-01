function random(min, max){
	return Math.floor(Math.random()*(max-min+1))+min;}

function setColor(a){var r=random(0,255);
var g=random(0,255);
var b=random(0,255);

for(i=0; i<6;i++){var sqr1=document.getElementsByClassName("square")[i];
sqr1.style.backgroundColor="#232323";}
console.log(r+g+b)

for(i=0; i<a;i++){
	var sqr=document.getElementsByClassName("square")[i];
	sqr.style.backgroundColor=("rgb("+random(0,255)+","+random(0,255)+","+random(0,255)+")");
	sqr.addEventListener("click", function(){
		this.style.backgroundColor="#232323";
	});
}};


function getWinningBox(a){
var correctbox=document.getElementsByClassName("square")[random(0,a-1)];
return correctbox;};

function getWinningColor(a, correctbox){
var correctrgb=correctbox.style.backgroundColor;
return correctrgb;};

function makeplayable(a, correctrgb, correctbox){

correctbox.addEventListener("click", function correctclick(){
	this.style.backgroundColor=correctrgb;
	this.removeEventListener("click", correctclick);
	for(u=0; u<a;u++){
	var sqr=document.getElementsByClassName("square")[u];
	sqr.style.backgroundColor=correctrgb;
	h1=document.querySelector("h1");
	h1.style.backgroundColor=correctrgb;}
});	


	var h2=document.querySelector("h2");
	h2.textContent=correctrgb;}

function init(a){
setColor(a);
correctbox=getWinningBox(a);
correctrgb=getWinningColor(a, correctbox);
makeplayable(a,correctrgb, correctbox);
return a;
};
init(6);

var a=document.querySelector("#hard");
a.addEventListener("click", function(){
	init(6);
});

var a=document.querySelector("#easy");
a.addEventListener("click", function(){
	init(3);
});

var a=document.querySelector("#reset");
a.addEventListener("click", function(){
	init(6);
});