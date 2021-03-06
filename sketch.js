var canva;
var contestantCount, database, quiz, question, contestant;
var gameState = 0;
var allContestants;
function setup(){
  database = firebase.database();
  canvas = createCanvas(windowWidth,windowHeight);
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  //please modify this
  if(contestantCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
    quiz.play();
  }
  
}
