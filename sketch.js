var database;
var position;
var playerCount;
var gameState;
var form,game,player;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");
      drawSprites();
}
