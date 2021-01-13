import React, { Component } from 'react';

class Question extends Component {
  constructor() {
    super();
    this.getAnswers = this.getAnswers.bind(this);
    this.renderAnswers = this.renderAnswers.bind(this);
    // this.renderCorrectAnswer = this.renderCorrectAnswer.bind(this);
    // this.renderIncorrectAnswer = this.renderIncorrectAnswer.bind(this);
  }
/*
  renderCorrectAnswer(answer) {
    return (<button data-testid="correct-answer">{ answer }</button>);
  }

  renderIncorrectAnswer() {

  } */

  renderAnswers(counter, questions) {
    // if (counter === 0) break;
    const random = Math.floor(Math.random() * questions.length);
    const question = questions[random];
    console.log(question);
    console.log(question["correctAnswer"]);
  }
    /*
    if (random === 0) {
      
      this.renderCorrectAnswer(questions[random]);
      const newQuestions = questions.filter((question) => question === questions[random]);
      counter -= 1;
      return this.renderAnswers(counter, newQuestions);
    };
    if (random === 1) {
      
    }
    this.renderAnswers(counter, array);
  } */

  getAnswers(object) {
    const { correct_answer, incorrect_answers } = object;
    const questions = [
      { correctAnswer: correct_answer },
      { incorrectAnswer: incorrect_answers },
    ];
    let counter = 1;
    if (incorrect_answers.length > counter) {
      counter += incorrect_answers.length;
    } else counter = questions.length;
    this.renderAnswers(counter, questions);
  }

  render() {
    const { item } = this.props;
    const { category, question } = item;
    return (
      <div className="question-container">
        <div className="category-container">
          <h2 data-testid="question-category">{ category }</h2>
        </div>
        <div className="question-text-container">
          <h3 data-testid="question-text">{ question }</h3>
        </div>
        <div className="answers-container">
          { this.getAnswers(item) }
        </div>
      </div>
    );
  }
}

export default Question;
