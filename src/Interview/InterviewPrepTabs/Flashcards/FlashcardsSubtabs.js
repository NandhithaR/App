import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FlashcardsGames from './FlashcardsGames'
import FlashcardsLearn from './FlashcardsLearn'
import FlashcardsTest from './FlashcardsTest'
import './flashcardssubtabs.css'
function FlashcardsSubtabs(){
    return(<div>
                <Router>
                    <div>
                    <Link to="/flashcards/test" id="test">Test</Link>
                    <Link to="/flashcards/learn" id="learn">Learn</Link>
                    <Link to="/flashcards/games" id="games">Games</Link>
                    </div>
                    <div>
                    <Route path="/flashcards/test" exact strict component={FlashcardsTest}/>
                    <Route path="/flashcards/learn" exact strict component={FlashcardsLearn}/>
                    <Route path="/flashcards/games" exact strict component={FlashcardsGames}/>
                    </div>
                </Router>
        
            </div>)
}

export default FlashcardsSubtabs