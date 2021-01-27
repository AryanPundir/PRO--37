class Quiz{
    constructor(){

    }

getState(){
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value",function(data){
        gameState = data.val();
    })
}


update(state){
    database.ref('/').update({
        gameState: state
    })
}

async start(){
    if(gameState===0){
        contestent = new Contestent();
        var contestentCountRef = await database.ref('contestentCount').once("value");
        if(contestentCountRef.exists()){
            contestentCount = contestentCountRef.val();
            contestent.getCount();
        } 
        question = new Question();
        question.display();
    }
}

play(){
    question.hide();
    textSize(30);
    text("Result of the Quiz",350,0)
    textSize(25)
    text("Note :- the Correct answer in coloured in green and wrong in red",50,370)
    Contestent.getContestentInfo();

    if(contestent !== undefined){
        background("yellow")
        var display_position = 200;

        for(var plr in contestent){
            var correctAns = "2";
            if(correctAns=== contestent[plr].answer)
            fill("Green")
            else
            fill("Red")

            display_position+=20;
            textSize(15);
            text(contestent[plr].name+":"+ contestent[plr].answer,120,display_position)
        }
    }
}


}
