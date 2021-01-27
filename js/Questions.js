class Question {
    constructor(){
        this.input = createInput("Name");
        this.input2 = createInput("Enter correct answer no.")
        this.button = createButton('Submit');
        this.title = createElement('h2')
        this.question = createElement('h3')
        this.option1 = createElement('h3')
        this.option2 = createElement('h3')
        this.option3 = createElement('h3')
        this.option4 = createElement('h3')
       
    }

hide(){
    this.input.hide();
    this.input2.hide();
    this.button.hide();
    this.title.hide();
}

display(){
    this.title.html("MyQuiz Game")
    this.title.position(350,0)

this.question.html("Question:- What starts and ends with the letter <E>, but has only one letter? ");
this.question.position(150,80);
this.option1.html("1: Everyone");
this.option1.position(150,100);
this.option2.html("2:Envelope");
this.option2.position(150,120);
this.option3.html("3:Estimate");
this.option3.position(150,140);
this.option4.html("4:Example");
this.option4.position(150,160);


this.input.position(150,230);
this.input2.position(400,230)
this.button.position(350,270)

this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();
    this.input2.hide();
    contestent.name = this.input.value();
    contestent.answer = this.input2.value();
    contestentCount+=1;
    contestent.index = contestentCount;
    contestent.update();                          
    contestent.updateCount(contestentCount);
   // this.greeting.html("Hello " + player.name)
    //this.greeting.position(130, 100);
  });


}


}