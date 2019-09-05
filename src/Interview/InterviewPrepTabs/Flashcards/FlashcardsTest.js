import React from 'react'
import ReactDOM from 'react-dom'
import {data,fillblanks} from './Equations/FlashcardContent'
import MCQ from './FlashcardsQuestions/MCQ'
import FillintheBlanks from './FlashcardsQuestions/FillintheBlanks'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function FlashcardsTest(){
    return(<div>
            <Router>
                    <div>
                    <Link to="/flashcards/test/mcq" id="test">MCQ</Link>
                    <Link to="/flashcards/test/qa" id="learn">Fill in the Blanks</Link>
                    </div>
                    <div>
                    <Route path="/flashcards/test/mcq" exact strict component={MCQ}/>
                    <Route path="/flashcards/test/qa" exact strict component={FillintheBlanks}/>
                    </div>
            </Router>
           </div>
        )
}

export default FlashcardsTest