import React from "react"
import ReactDOM from "react-dom"
import './sta.css';

class StaticTimingAnalysis extends React.Component{   
    constructor(){
        super()
        this.state = {
            coordinates: [0,0, 0,100, 100,100, 100,0, 200,0, 200,100],
            value:"5"
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({value: e.target.value});
        this.updateOutput()
      }

    updateOutput(){
        let output
        this.setState(prevState => {
            console.log("Prev Coordinates:",prevState.coordinates);
            console.log("Value:",prevState.value)
            if(prevState.value>this.state.value){
               output =  prevState.coordinates.map(outFunc_ahead,0);
               function outFunc_ahead(op,index){
                   while(index<12){
                       if(index%2==0){
                           console.log("op:",op)
                        op=parseInt(op)+parseInt(prevState.value)
                       }
                    //    else
                    //    op=parseInt(op)
                        index=index+2
                   }
                   return op;
               }
               console.log("Output Forward:",output)

            }
            else{
                output =  prevState.coordinates.map(outFunc_back,0);
                function outFunc_back(op,index){
                    while(index<12){
                        if(index%2==0){
                         op=parseInt(op)-parseInt(prevState.value)
                        }
                        // else
                        // op=parseInt(op)
                        index=index+2
                    }
                    return op;
                }
                
                //console.log("Output Backward:",output)
            }

                return{
                    coordinates: output
                }  
            });
        }

    render(){
        return(
            <div>
                <h1>STA Content</h1>
                <svg>
                    <polyline points="0,0, 0,50, 50,50, 50,0, 100,0, 100,50, 150,50, 150,0, 200,0, 200,50" 
                    style={{fill:"none",stroke:"black",strokeWidth:"3"}} />
                    <polyline id="output" points={this.state.coordinates}
                    style={{fill:"none",stroke:"blue",strokeWidth:"3"}} />
                </svg>
                 <input
                type="range"
                className="slider"
                step="1"
                min="0"
                max="10"
                value={this.state.value}
                onChange={this.handleChange}/>
               
            </div>
    
        )
    }
    
}

export default StaticTimingAnalysis
