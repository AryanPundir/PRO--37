var canva;
var gameState = 0
var contestentCount
var database
var quiz
var question
var contestent

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
 
  if(contestentCount === 4){
   
    quiz.update(1);
  }
  if(gameState === 1){
    
    clear();
    quiz.play();
  }
    
  
  
}
