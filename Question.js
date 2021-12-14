class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("").attribute("placeholder","Enter your name here...");
    this.input2 = createInput("").attribute("placeholder","Enter Correct Option No..");
    this.question = createElement('h2');
    this.option1 = createElement('h3');
    this.option2 = createElement('h3');
    this.option3 = createElement('h3');
    this.option4 = createElement('h3');
    this.message = createElement("h2")
    this.name = createElement('h4');
    this.ans = createElement('h4');
  }

  setElementsStyle()
  {
    this.input1.class('customInput');
    this.input2.class('customInput');
    this.title.class("greeting");
    this.question.class('greeting');
    this.option1.class('greeting');
    this.option2.class('greeting');
    this.option3.class('greeting');
    this.option4.class('greeting');
    this.message.class('greeting');
    this.name.class('greeting');
    this.ans.class('greeting');
  }

  hide()
  {
    this.title.hide();
    this.input1.hide();
    this.input2.hide();
    this.message.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(width/2-100, 0);

    this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
   
    this.question.position(300, 50);
    this.option1.html("1: Everyone " );
    this.option1.position(300, 100);
    this.option2.html("2: Envelope" );
    this.option2.position(300, 120);
    this.option3.html("3: Estimate " );
    this.option3.position(300, 140);
    this.option4.html("4: Example" );
    this.option4.position(300, 160);

    this.input1.position(300, 230);
    this.input2.position(500, 230);
    this.name.html('Enter Your Name Here...');
    this.name.position(300,230);

    this.ans.html('Enter the correct answer...')
    this.ans.position(500, 230);
    
  }
}
