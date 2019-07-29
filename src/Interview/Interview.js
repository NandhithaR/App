import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Quiz from './InterviewPrepTabs/Quiz'
import CompanyQuestion from './InterviewPrepTabs/CompanyQuestions'
import Fundamentals from './InterviewPrepTabs/FundamentalsSlides'

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
const routes = [
  {
    path: "/quiz",
    exact: true,
    main: () => <Quiz />
  },
  {
    path: "/companyquestion",
    main: () => <CompanyQuestion />
  },
  {
    path: "/fundamentals",
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
              <Link to="/companyquestion">Companywise Questions</Link>
            </li>
            <li>
              <Link to="/fundamentals">Fundamentals</Link>
            </li>
          </ul>

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
