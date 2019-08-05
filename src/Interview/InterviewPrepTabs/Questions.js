import React from "react"
import ReactDOM from "react-dom"
import questions from './InterviewQuestionsData/interviewques.json'
import './questions.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


let snum = 0
let linkeClicked = false
function SidebarQuiz(props){
    function displayPage(){
      linkeClicked = true
      snum= props.slidenum
      console.log(linkeClicked)
      return snum
    }
    return(
        <div>
            <Link id={props.slidenum} onClick={displayPage}>{props.linkname}</Link>
        </div>
    )
}

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
export {Questions,SidebarQuiz} 
