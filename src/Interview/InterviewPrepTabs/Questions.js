import React from "react"
import ReactDOM from "react-dom"
import questions from './InterviewQuestionsData/interviewques'
import './questions.css'
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as Scroll from 'react-scroll';
import { Link,DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
//import sunrise from './InterviewQuestionsData/circuitimages/sunrise.jpeg'
//import d from './InterviewQuestionsData/ques'



class Questions extends React.Component {

  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  scrollToWithContainer() {

    let goToContainer = new Promise((resolve, reject) => {

      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });

    });

    goToContainer.then(() =>
      scroller.scrollTo('scroll-container-second-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: 'scroll-container'
      }));
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  render() {
    return (
      <div>
          {/* <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1"> */}
                <ul id="links">
                  <li><Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} >Topic1</Link></li>
                  <li><Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500} >Topic2</Link></li>
                </ul>
              {/* </div>
            </div>
          </nav> */}

          <Element name="test1" className="element" >
          <div id="topic1">
            <h2>Topic1</h2>
              {Object.keys(questions).map(key => (
                <div>
                  {questions[key].type}
                  <p>{questions[key].Question}</p>
                  <img src={questions[key].Image} key={key} />
                </div>
              ))}
          </div>
        </Element>

          {/* <Element name="test2" className="element">
          <div id="topic2">
            <h2>Topic2</h2>
          {questions.map((element,index)=>{
                return(<div>                        
                        <p><b>{element.Question}</b></p>
                        <p>{element.Answer}</p>
                        </div>)
            })}
          </div>
          
        </Element> */}

          <a onClick={this.scrollToTop}>To the top!</a>
      </div>
    );
  }

}
export default Questions

