import React from 'react'
import ReactDOM from 'react-dom'
import Flashcards from './Flashcards';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class FlashcardsLinks extends React.Component{
    render(){
        return(
            <div>
                <Router>
                    <ul>
                        <li><Link to="/flashcards/easy">Easy</Link></li>
                        <li><Link to="/flashcards/medium">Medium</Link></li>
                        <li><Link to="/flashcards/hard">Hard</Link></li>
                    </ul>
                    <Route path="/flashcards/easy" exact strict component={Flashcards}/>
                    <Route path="/flashcards/medium" exact strict component={Flashcards}/>
                    <Route path="/flashcards/hard" exact strict component={Flashcards}/>
                </Router>
            </div>
        )
    }
}

export default FlashcardsLinks;