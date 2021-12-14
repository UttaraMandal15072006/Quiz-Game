var canvas, backgroundImage;

var questions;

var question, contestant, quiz;

let back;
function preload()
{
  back=loadImage('bk.png');
}

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();
}


function draw(){
  background(back);

}
