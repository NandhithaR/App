import React from "react"
import ReactDOM from "react-dom"
import questions from '../Data/interviewques.json';
class Quiz extends React.Component{
    render(){
        return(
            <div>
            <h1>Quiz</h1>
            {questions.map((element,index)=>{
                return(<div>
                        <p>{element.Question}</p>
                        <p>{element.Answer}</p>
                        </div>)
            })}
            </div>
            
        )
    }

}
export default Quiz; 