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
            if(prevState.value>this.state.value){
               output =  prevState.coordinates.map(outFunc_ahead,0);
               function outFunc_ahead(op,index){
                   while(index<14){
                       if(index%2==0){
                        op=parseInt(op)+parseFloat(5)
                        return op
                       }
                        index=index+2
                   }
                   return op;
               }
            }
            else{
                output =  prevState.coordinates.map(outFunc_back,0);
                function outFunc_back(op,index){
                    while(index<13){
                        if(index%2==0){
                         op=parseInt(op)-parseFloat(5)
                         return op
                        }
                        index=index+2
                    }
                    return op;
                }
                
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
                <svg  height="200" width="500">
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
