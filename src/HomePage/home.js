import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Tools from '../Tools/Tools';
import Digital from '../Digital/Digital';
import Interview from '../Interview/Interview';
import Analog from '../Analog/Analog';
import HomeScreen from './HomeScreen';
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
                <Route path="/interview" exact strict component={Interview} />
                <Route path="/tools" exact strict component={Tools} />
                <Route path="/analog" exact strict component={Analog} />
                <Route path="/" exact strict component={HomeScreen} />
            </Router>
        </div>
    )
}

export default Home; 