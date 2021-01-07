var canvas;
var background;
var gameState=0;
var database,playerCount;
var form;
var player;
var allPlayers;
var pos;
var cars=[];
var car1,car1Image;
var car2,car2Image;
var car3,car3Image;
var car4,car4Image;
var track,trackImage;
var bg,flag=1;

function preload()
{
    //relative 
    //absolute 
    car1Image=loadImage("images/car1.png");
    car2Image=loadImage("images/car2.png");
    car3Image=loadImage("images/car3.png");
    car4Image=loadImage("images/car4.png");
    trackImage=loadImage("images/track.jpg");
    bg=loadImage("Backtrack.jpeg");
}
function setup(){
canvas=createCanvas(displayWidth-30,displayHeight-40);
database=firebase.database();
game=new Game();
game.getState();
game.start();

}

function draw(){
    
    if(playerCount===2)
    {
    game.update(1);
    }
    if(gameState===1)
    {
        clear();
        game.play();
    }
    if(gameState===2)
    {
        game.end();
    }
    
}