import React from "react"
import ReactDOM from "react-dom"
//import questions from './Data/interviewques.json';
import quizData from '../QuizData/QuizData.json' 
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";
import '../quiz.css'
import Timer from '../Timer'

class SecondQuiz extends React.Component {
    state = {
      currentQuestion: Math.floor(Math.random() * 10),
      myAnswer: null,
      options: [],
      exp: [],
      score: 0,
      disabled: true,
      isEnd: false,
      idx: 0
    };
  
    loadQuizData = () => {
      // console.log(quizData[0].question)
      this.setState(() => {
        return {
          questions: quizData[this.state.currentQuestion].question,
          answer: quizData[this.state.currentQuestion].answer,
          options: quizData[this.state.currentQuestion].options,
          explaination: quizData[this.state.currentQuestion].explaination
        };
      });
    };
  
    componentDidMount() {
      this.loadQuizData();
    }
    nextQuestionHandler = () => {
      // console.log('test')
      const { myAnswer, answer, score, exp,idx,explaination } = this.state;
      let a = this.state.exp.slice(); //creates the clone of the state
      a[idx] = explaination;
    this.setState({exp: a});
     console.log("exp:",exp);
      if (myAnswer === answer) {
        this.setState({
          score: score + 1
        });
      }
  
      this.setState({
        currentQuestion: this.state.currentQuestion + 3,
        idx: this.state.idx + 1
      });
      console.log(this.state.currentQuestion);
      console.log(this.state.idx);
    };
  
    componentDidUpdate(prevProps, prevState) {
      if (this.state.currentQuestion !== prevState.currentQuestion) {
        this.setState(() => {
          return {
            disabled: true,
            questions: quizData[this.state.currentQuestion].question,
            options: quizData[this.state.currentQuestion].options,
            answer: quizData[this.state.currentQuestion].answer
          };
        });
      }
    }
    //check answer
    checkAnswer = answer => {
      this.setState({ myAnswer: answer, disabled: false });
    };
    finishHandler = () => {
      const {exp,idx,explaination}=this.state;
      let a = this.state.exp.slice(); //creates the clone of the state
      a[idx] = explaination;
    this.setState({exp: a});
      if (this.state.idx === 4) {
        this.setState({
          isEnd: true
        });
      }
    };
    render() {
      const { options, myAnswer, currentQuestion, isEnd, idx,exp } = this.state;
      if (isEnd) {
        return (
          <div className="result">
            <h3>Your Final score is {this.state.score} points </h3>
            <p>
              Review these Concepts
              <ul>
               {exp.map((item, index) => (
                  <li key={index}>
                    {item}
                  </li>
                ))}
                
              </ul>
            </p>
          </div>
        );
      } else {
        return (
          <div className="App">
            <h1>{this.state.questions} </h1>
            <Timer startCount='0'/>
            <span>{`Questions ${idx}  out of ${4} remaining `}</span>
            {options.map(option => (
              <p
                key={option.id}
                className={`ui floating message options
           ${myAnswer === option ? "selected" : null}
           `}
                onClick={() => this.checkAnswer(option)}
              >
                {option}
              </p>
            ))}
            {idx < 4 && (
              <button
                className="ui inverted button"
                disabled={this.state.disabled}
                onClick={this.nextQuestionHandler}
              >
                Next
              </button>
            )}
            {/* //adding a finish button */}
            {idx === 4 && (
              <button className="ui inverted button" onClick={this.finishHandler}>
                Finish
              </button>
            )}
          </div>
        );
      }
    }
  }
  
  export default SecondQuiz;
  