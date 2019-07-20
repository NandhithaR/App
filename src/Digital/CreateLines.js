import React from "react"
import ReactDOM from "react-dom"

function CreateLinesNew(){
    return(
        <div>
            <svg height="200" width="500">
            <polyline points="30,0, 30,50, 50,50, 50,0, 100,0, 100,50, 150,50, 150,0, 200,0, 200,50" 
                style={{fill:'none',stroke:'blue',strokeWidth:'3'}} />
            </svg>
        </div>
    )
}

export default CreateLinesNew