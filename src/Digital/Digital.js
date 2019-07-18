import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StaticTimingAnalysis from './STA';
import CreateLinesNew from './CreateLines';
function Digital(){
    return(
        <div>
            <h1>Digital Content</h1>
            <Link to="/digital/sta">Static Timing Analysis</Link>
            <Route path="/digital/sta" component={StaticTimingAnalysis} />
        </div>
    )
}
export default Digital; 