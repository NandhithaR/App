import React from "react"
import ReactDOM from "react-dom"
import './sta.css';
import { updateExpression } from "@babel/types";
// function CreateLinesInput(props){
//     console.log("this is a prop");
//     console.log(props);
//     return(
//         <div className="CreateLinesInput">       
//             <svg height="510" width="400">
//             <polyline points={props.coordinates1} style={props.style1} />
//             <polyline points={props.coordinates2} style={props.style2} />
//             Sorry, your browser does not support inline SVG.
//             </svg>
//         </div> 
//     )
// }


class StaticTimingAnalysis extends React.Component{   
    constructor(){
        super()
        let x1,y1, x2, y2, x3, y3, x4, y4, x5, y5, x6, y6
        this.state = {
            x1:"0",
            y1:"0",
            x2:"0",
            y2:"100",
            x3:"100",
            y3:"100",
            x4:"100",
            y4:"0",
            x5:"200",
            y5:"0",
            x6:"200",
            y6:"100",
            coordinates: "200,0, 0,100, 100,150, 100,0, 200,0, 200,100",
            value:"5"
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({value: e.target.value});
        this.updateOutput()
        //console.log("It's working!!");
        // this.setState(prevState => {
        //     this.setState({value: e.target.value});
        //     if(prevState.value>this.value)
        //     return{
        //         coordinates: "200,0, 0,100, 100,150, 100,0, 200,0, 200,100"
        //     }
        // })
      }

    updateOutput(){
        this.setState(prevState => {
            if(prevState.value>this.state.value){
                this.state.x1=prevState.x1 + prevState.value
                this.state.y1=this.state.y1
                this.state.x2=(prevState.x2 + prevState.value)
                this.state.y2=(this.state.y2)
                this.state.x3=(prevState.x3 + prevState.value)
                this.state.y3=(this.state.y3)
                this.state.x4=(prevState.x4 + prevState.value)
                this.state.y4=(this.state.y4)
                this.state.x5=(prevState.x5 + prevState.value)
                this.state.y5=(this.state.y5)
                this.state.x6=(prevState.x6 + prevState.value)
                this.state.y6=(this.state.y6)
            }
            else{
                this.state.x1=prevState.x1 - prevState.value
                this.state.y1=this.state.y1
                this.state.x2=(prevState.x2 - prevState.value)
                this.state.y2=(this.state.y2)
                this.state.x3=(prevState.x3 - prevState.value)
                this.state.y3=(this.state.y3)
                this.state.x4=(prevState.x4 - prevState.value)
                this.state.y4=(this.state.y4)
                this.state.x5=(prevState.x5 - prevState.value)
                this.state.y5=(this.state.y5)
                this.state.x6=(prevState.x6 - prevState.value)
                this.state.y6=(this.state.y6)
            }
                let outputx1 = this.state.x1
                let outputy1 = this.state.y1
                let outputx2 = this.state.x2
                let outputy2 = this.state.y2
                let outputx3 = this.state.x3
                let outputy3 = this.state.y3
                let outputx4 = this.state.x4
                let outputy4 = this.state.y4
                let outputx5 = this.state.x5
                let outputy5 = this.state.y5
                let outputx6 = this.state.x6
                let outputy6 = this.state.y6
                // outputx1=toString(outputx1)
                // outputy1=toString(outputy1)
                // outputx2=toString(outputx2)
                // outputy2=toString(outputy2)
                // outputx3=toString(outputx3)
                // outputy3=toString(outputy3)
                // outputx4=toString(outputx4)
                // outputy4=toString(outputy4)
                // outputx5=toString(outputx5)
                // outputy5=toString(outputy5)
                // outputx6=toString(outputx6)
                // outputy6=toString(outputy6)
                //console.log("coordinates:",this.state.coordinates)
                return{
                    coordinates: outputx1,outputy1,outputx2,outputy2,outputx3,outputy3,outputx4,outputy4,outputx5,outputy5,outputx6,outputy6
                }

            
        })

    }

    render(){
        return(
            <div>
                <h1>STA Content</h1>
                {/* <CreateLinesInput coordinates1="0,0, 0,50, 50,50, 50,0, 100,0, 100,50, 150,50, 150,0, 200,0, 200,50" style1={{fill:"none",stroke:"black",strokeWidth:"3"}}
                coordinates2={this.state.output_cord1} style2={{fill:"none",stroke:"blue",strokeWidth:"3"}} /> */}
                <svg>
                    <polyline points="0,0, 0,50, 50,50, 50,0, 100,0, 100,50, 150,50, 150,0, 200,0, 200,50" 
                    style={{fill:"none",stroke:"black",strokeWidth:"3"}} />
                    <polyline points={this.state.coordinates}
                    style={{fill:"none",stroke:"blue",strokeWidth:"3"}} />
                </svg>
                 <input
                type="range"
                className="slider"
                step="1"
                value={this.state.value}
                onChange={this.handleChange}/>
            </div>
    
        )
    }
    
}

export default StaticTimingAnalysis
