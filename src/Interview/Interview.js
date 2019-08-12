import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import Quiz from './InterviewPrepTabs/Quiz'
import Questions from './InterviewPrepTabs/Questions'
import {Fundamentals,Sidebar} from './InterviewPrepTabs/Fundamentals'
import Sets from './InterviewPrepTabs/Sets'
import FlashcardsLinks from './InterviewPrepTabs/Flashcards/FlashcardsLinks'
//import Flashcards from "./InterviewPrepTabs/Flashcards/Flashcards";
//import Sidebar from './InterviewPrepTabs/Sidebar'
//import Sidebar from './InterviewPrepTabs/Sidebar'
// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.


const routes = [
  {
    path: "/quiz",
    exact: true,
    main: () => <Sets />
  },
  {
    path: "/question",
    main: () => <Questions />
  },
  {
    path: "/flashcards",
    main: () => <FlashcardsLinks />
  },
  {
    path: "/fundamentals",
    sidebar: () => <div>
                  <Sidebar slidenum="0" linkname="Introduction to Digital Circuits"/>
                  <Sidebar slidenum="1" linkname="Introduction to Digital Circuits II"/>
                  <Sidebar slidenum="2" linkname="Combinational Logic Basics"/>
                  <Sidebar slidenum="3" linkname="Combinatioal Circuits"/>
                  <Sidebar slidenum="4" linkname="Simplification"/>
                  </div>,
    main: () => <Fundamentals />
  }
];



function Interview() {
  return (
    <Router>
      <div style={{ display: "flex", width: "170%"}}>
        <div
          style={{
            padding: "10px",
            width: "10%",
            background: "#f0f0f0"
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/quiz">Quiz</Link>
            </li>
            <li>
              <Link to="/question">Interview Questions</Link>
            </li>
            <li>
              <Link to="/flashcards">Flashcards</Link>
            </li>
            <li>
              <Link to="/fundamentals">Fundamentals</Link>
            </li>
          </ul>
          {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.sidebar}
            /> 
          ))}
        </div>

        <div style={{ flex: 1, padding: "70px" }}>
          {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            /> 
          ))}
        </div>
      </div>
    </Router>
  );
}

export default Interview;
