import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";
import FirstQuiz from './QuizTopics/Topics/firstQuiz'
import SecondQuiz from './QuizTopics/Topics/secondQuiz'
import ThirdQuiz from './QuizTopics/Topics/thirdQuiz'
import FourthQuiz from './QuizTopics/Topics/fourthQuiz'
import FifthQuiz from './QuizTopics/Topics/fifthQuiz'

class Sets extends React.Component{
    render(){
        return(
            <div>
                <Router>
                    <ul>
                        <li><Link to="/quiz/set1">Set 1</Link></li>
                        <li><Link to="/quiz/set2">Set 2</Link></li>
                        <li><Link to="/quiz/set3">Set 3</Link></li>
                        <li><Link to="/quiz/set4">Set 4</Link></li>
                        <li><Link to="/quiz/set5">Set 5</Link></li>
                    </ul>
                    <Route path="/quiz/set1" exact strict component={FirstQuiz}/>
                    <Route path="/quiz/set2" exact strict component={SecondQuiz}/>
                    <Route path="/quiz/set3" exact strict component={ThirdQuiz}/>
                    <Route path="/quiz/set4" exact strict component={FourthQuiz}/>
                    <Route path="/quiz/set5" exact strict component={FifthQuiz}/>
                </Router>
            </div>
        )
    }
}

export default Sets;