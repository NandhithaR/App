import React from 'react'
import ReactDOM from 'react-dom'
import Flashcards from './Flashcards';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './flashcardslinks.css'
import FlashcardsSubtabs from './FlashcardsSubtabs';
class FlashcardsLinks extends React.Component{
    render(){
        return(<div><div id="container">
                <Router>
                    <div id="left">
                    <ul>
                        <li><Link to="/flashcards/easy">Easy</Link></li>
                        <li><Link to="/flashcards/medium">Medium</Link></li>
                        <li><Link to="/flashcards/hard">Hard</Link></li>
                    </ul>
                    </div>
                    <div id="right">
                    <Route path="/flashcards/easy" exact strict component={FlashcardsSubtabs}/>
                    <Route path="/flashcards/medium" exact strict component={FlashcardsSubtabs}/>
                    <Route path="/flashcards/hard" exact strict component={FlashcardsSubtabs}/>
                    </div>
                </Router>
                </div>
                </div>
        )
    }
}

export default FlashcardsLinks;