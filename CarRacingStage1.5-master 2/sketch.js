var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var car1_ing 
var car2_ing 
var car3_ing 
var car4_ing 
var track_ing;
function preload(){
  car1_ing=loadImage("images/car1.png");
  car2_ing=loadImage("images/car2.png");
  car3_ing=loadImage("images/car3.png");
  car4_ing=loadImage("images/car4.png");
  track_ing=loadImage("images/track.jpg");
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
