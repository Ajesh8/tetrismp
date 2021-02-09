var tetcanvas 		= document.getElementById("tetcanvas"); 
var ctet			= tetcanvas.getContext("2d");
var startButton 	= document.getElementById("start");
var interval 		= null;
ctet.fillStyle = "#000000";
ctet.fillRect(0, 0, tetcanvas.width, tetcanvas.height);

for(var i=0;i<10;i++) {
	for(var j=0;j<20;j++) {
		ctet.strokeStyle = "#666699";
		ctet.strokeRect(i*30,j*30,30,30);
	}
}

const timer = ms => new Promise(res => setTimeout(res, ms))

grid=new Array(24);

function opSquare(x,y,op) {
	grid[y][x]=op;
	grid[y-1][x]=op;
	grid[y][x+1]=op;
	grid[y-1][x+1]=op;
}
function paintGrid() {
	for(var i=0;i<24;i++) {
	for(var j=0;j<10;j++) {
		if(grid[i][j]==1) {
			ctet.fillStyle = "#FFFF00";
			ctet.fillRect(j*30, (i-4)*30, 30, 30);
		}
		else {
			ctet.fillStyle = "#000000";
			ctet.fillRect(j*30, (i-4)*30, 30, 30);
		}
		ctet.strokeStyle = "#666699";
			ctet.strokeRect(j*30,(i-4)*30,30,30);
	}
}
}

for(var i=0;i<24;i++)
	{
		grid[i]=new Array(10);
	}

for(var i=0;i<24;i++) {
	for(var j=0;j<10;j++) {
		grid[i][j]=0
	}
}

var piecey=3;
var piecex=4;

async function playTetris(){
	while(true) {

		opSquare(piecex,piecey,1);
		console.log(grid);
		paintGrid();
		opSquare(piecex,piecey,0);
		piecey=piecey+1;
		await timer(1000);
	}
}

startButton.onclick=function() //Button to start the game of life
{	console.log("Started");
	playTetris(); //Calling the game of life function inside a setInterval function so it can be stopped via Stop button
		
}