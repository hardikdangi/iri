var gamestate=0;
var playercount;
var database;
var form,game,player;

function setup(){
  createCanvas(500,500);
  database = firebase.database();
 game=new Game()
 game.getstate()
 game.start()
  

 
}

function draw(){
  background("white");
  
  
}

