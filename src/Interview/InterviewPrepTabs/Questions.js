import React from "react"
import ReactDOM from "react-dom"
import questions from './InterviewQuestionsData/interviewques.json'
import './questions.css'
class Questions extends React.Component{
    render(){
        return(
            <div id="names">
            <h1>Questions</h1>
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
export default Questions; 
