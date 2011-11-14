var WIDTH;
var HEIGHT;
var g;
var rightDown = false;
var leftDown = false;
var carray = new Array();


// Main Function To Start
function start()
{
	g = $('#canvas')[0].getContext("2d");
	WIDTH = $("#canvas").width();
	HEIGHT = $("#canvas").height();
	carray[0] = new Circle(225,200,100,"rgba(0,255,255,0.5)");
	carray[1] = new Circle(200,250,100,"rgba(255,0,255,0.5)");
	carray[2] = new Circle(250,250,100,"rgba(255,255,0,0.5)");

	return setInterval(draw, 10);
}


// Get Key Input
function onKeyDown(evt) 
{
	if(evt.keyCode == 39) rightDown = true;
	else if(evt.keyCode == 37) leftDown = true;

}

function onKeyUp(evt) 
{
	if (evt.keyCode == 39) rightDown = false;
	else if (evt.keyCode == 37) leftDown = false;
}
function onMouseDown(evt){
	alert(evt.target); 
	//carray[2] = new Circle(0,2,10,"rgba(255,255,0,0.5)");
}


function Circle(x,y,r,color)
{
	this.x = x;
	this.y = y;
	this.r = r;
	this.dx = Math.ceil(Math.random()*7);
	this.dy = Math.ceil(Math.random()*7);
 
	this.draw = function()
	{
		
		g.strokeStyle = "rgb(0,0,0)";
		g.beginPath();
		g.fillStyle = color;
		g.arc(this.x, this.y, this.r, 0, Math.PI*2, true);
		g.closePath();
		g.fill();
		g.stroke(); 
	}
	
	this.getX = function()
	{
		return x;
	}
	
	this.getY = function()
	{
		return this.y;
	}
	
	this.move = function()
	{	
	
	}

	// function onmousedown(evt){
	// 	alert(evt);
	// }
	
}

// Draw Function
function draw()
{
	clear();
	var i;
	for (i=0; i<carray.length; i++)
	{
		//carray[i].move();
		carray[i].draw();
	}
}

function clear() 
{
	g.fillStyle = "#fff";
	g.fillRect(0, 0, WIDTH, HEIGHT);
}

// Use JQuery to wait for document load
$(document).ready(function()
{
	start();
});
function onmousedown(evt){
//	alert(evt.target);
}
$(document).keydown(onKeyDown);
$(document).keyup(onKeyUp);
$(document).mousedown(onMouseDown)


