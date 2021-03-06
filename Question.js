class Question{
    constructor(){
        this.input = createInput("Enter Your Name Here..."); 
        this.button = createButton("Submit");
        this.greeting =  createElement("h3");
        this.input2 = createInput("Enter Correct Option No."); 
        this.answer1 = createElement("h4");
        this.answer2 = createElement("h4");
        this.answer3 = createElement("h4");
        this.answer4 = createElement("h4");
    }
    hide(){
        //title.hide();
        this.input.hide();
        this.button.hide();
        this.input2.hide();
    }
    display(){
        var title = createElement("h2");
        title.html("My Quiz");
        title.position(windowWidth/2+-50,0);
        this.input2.position(windowWidth/2-400,windowHeight/2+50);
        this.input.position(windowWidth/2+300,windowHeight/2+50);
        this.button.position(windowWidth/2-5,windowHeight/2+50);
        this.greeting.html("Question:-What starts and ends with the letter 'E', but only has one letter?");
        this.greeting.position(windowWidth/2-250,windowHeight/2-400);
        this.answer1.html("1:Everyone");
        this.answer1.position(windowWidth/2-250,windowHeight/2-350);
        this.answer2.html("2:Envelope");
        this.answer2.position(windowWidth/2-250,windowHeight/2-300);
        this.answer3.html("3:Estimate");
        this.answer3.position(windowWidth/2-250,windowHeight/2-250);
        this.answer4.html("4:Example");
        this.answer4.position(windowWidth/2-250,windowHeight/2-200);

          this.button.mousePressed(()=>{
            title.hide();
            this.input2.hide();
            this.input.hide();
            this.button.hide();
            contestant.name = this.input.value();
            //You also need to store the correct ans provided by the contestant 
            contestant.answer=this.input2.value();
            contestantCount+=1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);    
            /*This part shall be part of quiz.js
            for(var plr in allContestants){
                if(allContestants[plr].this.button.mousePressed){
                    gameState = 1;
                }
            }*/
          });
    }

}