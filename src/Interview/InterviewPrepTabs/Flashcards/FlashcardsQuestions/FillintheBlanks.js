import React from "react"
import ReactDOM from "react-dom"
import {data} from '../Equations/FlashcardContent';

class FillintheBlanks extends React.Component{
    state = {
        currentQuestion:0,
        myAnswer: null,
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
            questions: data[this.state.currentQuestion].description,
            answer: data[this.state.currentQuestion].word,
            //explaination: quizData[this.state.currentQuestion].explaination
          };
        });
      };
    
      componentDidMount() {
        this.loadQuizData();
      }
      nextQuestionHandler = () => {
        // console.log('test')
       // const { myAnswer, answer, score, exp,idx,explaination } = this.state;
        const { myAnswer, answer, score, exp,idx } = this.state;
        let a = this.state.exp.slice(); //creates the clone of the state
      //  a[idx] = explaination;
     // this.setState({exp: a});
      // console.log("exp:",exp);
        if (myAnswer === answer) {
          this.setState({
            score: score + 1
          });
        }
    
        this.setState({
          currentQuestion: this.state.currentQuestion + 1,
          idx: this.state.idx + 1,
        });
        console.log(this.state.currentQuestion);
        console.log(this.state.idx);
      };
    
      componentDidUpdate(prevProps, prevState) {
        if (this.state.currentQuestion !== prevState.currentQuestion) {
          this.setState(() => {
            return {
              disabled: true,
              questions: data[this.state.currentQuestion].description,
              answer: data[this.state.currentQuestion].word
            };
          });
        }
      }
      //check answer
      checkAnswer = answer => {
        this.setState({ myAnswer: answer, disabled: false });
      };
      handleChange=answer=>{this.setState({ myAnswer: answer, disabled: false });}

      finishHandler = () => {
      //  const {exp,idx,explaination}=this.state;
        const {idx}=this.state;
        let a = this.state.exp.slice(); //creates the clone of the state
       // a[idx] = explaination;
      //this.setState({exp: a});
        if (this.state.idx === 4) {
          this.setState({
            isEnd: true
          });
        }
      };
      render() {
       // const { options, myAnswer, currentQuestion, isEnd, idx,exp } = this.state;
        const { options, myAnswer, currentQuestion, isEnd, idx } = this.state;
        if (isEnd) {
          return (
            <div className="result">
              <h3>Game Over your Final score is {this.state.score} points </h3>
              {/* <p>
                Explainations
                <ul> */}
                 {/* {exp.map((item, index) => (
                    <li key={index}>
                      {item}
                    </li>
                  ))} */}
                  
                {/* </ul>
              </p> */}
            </div>
          );
        } else {
          return (
            <div className="quiz">
             {/* <div id="timer"><Timer startCount='0'/></div> */}
              <h1 className="question">{this.state.questions} </h1>
              <span>{`Questions ${idx}  out of ${4} remaining `}</span>
              {/* {options.map(option => (
                <p
                  key={option.id}
                  className={`ui floating message options
             ${myAnswer === option ? "selected" : null}
             `}
                  onClick={() => this.checkAnswer(option)}
                >
                  {option}
                </p>
              ))} */}
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                />
              {idx < 4 && (
                <button
                  className="ui inverted button"
                  disabled={this.state.disabled}
                  value=""
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

export default FillintheBlanks