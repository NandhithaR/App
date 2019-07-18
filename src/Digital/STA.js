import React from "react"
import ReactDOM from "react-dom"
import './sta.css';
import { updateExpression } from "@babel/types";
function CreateLinesInput(props){
    console.log("this is a prop");
    console.log(props);
    return(
        <div className="CreateLinesInput">       
            <svg height="510" width="400">
            <path d={props.coordinates1} stroke={props.stroke1} fill="none"/>
            <path d={props.coordinates2} stroke={props.stroke2} fill="none"/>
            Sorry, your browser does not support inline SVG.
            </svg>
        </div> 
    )
}
// function onUpdate(){
//     return(
//         <div className="OutputLines">
//             <h1>Hello World!</h1>
//         </div>
//     )
// }

function  handleChange(event) {
    //this.setState({value: event.target.value});
    
  }
class StaticTimingAnalysis extends React.Component{   
    constructor(){
        super();
        this.state = {
            output_cord1="M70 90 L70 180 L200 180"
        }
    }

    render(){
        return(
            <div>
                <h1>STA Content</h1>
                <CreateLinesInput coordinates1="M80 100 L80 200 L200 200"
                stroke1={"red"} coordinates2="M70 90 L70 180 L200 180"
                stroke2={"blue"}/>
                 <input
                type="range"
                className="slider"
                min="0"
                max="10"
                step="1"
                onChange={handleChange}/>
            </div>
    
        )
    }
    
}

export default StaticTimingAnalysis
