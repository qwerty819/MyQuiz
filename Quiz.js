class Quiz{
    constructor(){
        
    }

    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState=data.val();
        })
    }

    update(state){
        database.ref("/").update({
            gameState:state
        })
    }

    async start(){
        if(gameState === 0){
            contestant = new Contestant();
            var contestantCountRef = await database.ref('contestantCount').once("value");
            if(contestantCountRef.exists()){
              contestantCount = contestantCountRef.val();
              contestant.getCount();
            }
            question = new Question();
            question.display();
          }
    }

    play(){
        question.hide();
        background("Yellow");
        fill(0)
        /*var title = createElement("h2");
        title.html("RESULTS OF THE QUIZ");
        title.position(windowWidth/2+-50,0);*/
        textSize(30);
        text("Result of the Quiz",windowWidth/2-115, 100);
        text("----------------------------",windowWidth/2-130, 110);
        //contestant.name = this.input.value();
        //contestant.answer = this.input2.value();-- this should bein question.js as your value is available over there
        Contestant.getContestantInfo();
        if(allContestants !== undefined){
        //var note = createElement("h3");
        fill("Blue");
        textSize(20);
        /*Use Text instruction insted of HTML as it will lead to lots of mmismatch
        //note.html("*NOTE: Contestant who answered correct is highlighted in green.");
        note.position(windowWidth/2+300,windowHeight/2+50);*/
        text("*NOTE: Contestant who answered correct are highlighted in green color!",600,400);

         // Need a variable to print names one below other
         var display_Answers = 500;   
        for(var plr in allContestants){
            var correctAns = "2";
            if(correctAns === allContestants[plr].answer)
                fill("Green");
            else
                fill("red");
            

            /*Use position to make them appear one below other
            textSize(20);
            text(allContestants[plr].name + ":" + allContestants[plr].answer,windowWidth-200,windowHeight-200);*/

            
        display_Answers+=30;
        textSize(20);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 600,display_Answers);
        }
    }

    }
}
