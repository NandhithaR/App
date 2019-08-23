import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Questions from './InterviewPrepTabs/Questions'
import {Fundamentals,Sidebar} from './InterviewPrepTabs/Fundamentals'
import Sets from './InterviewPrepTabs/Sets'
import FlashcardsLinks from './InterviewPrepTabs/Flashcards/FlashcardsLinks'


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
    sidebar: () => <div className="w3-sidebar w3-bar-block w3-light-gray">
                  <a className="w3-bar-item w3-button w3-border-bottom"><Sidebar slidenum="0" linkname="Introduction to Digital Circuits"/></a>
                  <a className="w3-bar-item w3-button w3-border-bottom"><Sidebar slidenum="1" linkname="Introduction to Digital Circuits II"/></a>
                  <a className="w3-bar-item w3-button w3-border-bottom"><Sidebar slidenum="2" linkname="Combinational Logic Basics"/></a>
                  <a className="w3-bar-item w3-button w3-border-bottom"><Sidebar slidenum="3" linkname="Combinatioal Circuits"/></a>
                  <a className="w3-bar-item w3-button w3-border-bottom"><Sidebar slidenum="4" linkname="Simplification"/></a>
                  </div>,
    main: () => <Fundamentals />
  }
];



function Interview() {
  return (
    <Router>
      <div style={{ display: "flex"}}>
        <div
          style={{
            padding: "10px",
            width: "10%",
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0, width:"170%" }} className="w3-bar-block w3-light-grey">
            <li>
              <Link to="/quiz" className="w3-bar-item w3-button w3-border-bottom">Quiz</Link>
            </li>
            <li>
              <Link to="/question" className="w3-bar-item w3-button w3-border-bottom">Interview Questions</Link>
            </li>
            <li>
              <Link to="/flashcards" className="w3-bar-item w3-button w3-border-bottom">Flashcards</Link>
            </li>
            <li>
              <Link to="/fundamentals" className="w3-bar-item w3-button w3-border-bottom">Fundamentals</Link>
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

        <div style={{ flex: 1, padding: "150px" , top:"-100px"}}>
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
