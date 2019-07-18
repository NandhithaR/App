import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Tools from '../Tools/Tools';
import Digital from '../Digital/Digital';
import Interview from '../Interview/Interview';
import Analog from '../Analog/Analog';
function Home(){
    return(
        <div>
            <Router>
                <div className="topnav">
                    <Link to="/" className="active" href="#home">Home</Link>
                    <Link to="/analog">Analog</Link>
                    <Link to="/digital">Digital</Link>
                    <Link to="/interview">Interview Prep</Link>
                    <Link to="/tools">Tools</Link>
                </div>
                <Route path="/digital" component={Digital} />
                <Route path="/interview" component={Interview} />
                <Route path="/tools" component={Tools} />
                <Route path="/analog" component={Analog} />
            </Router>
        </div>
    )
}

export default Home; 