import React from "react"
import ReactDOM from "react-dom"
import questions from './InterviewQuestionsData/interviewques'
import './questions.css'
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as Scroll from 'react-scroll';
import { Link,DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Collapse, Button} from 'reactstrap';

class ToggleQuestion extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isHidden: true }
  }
  
  toggleHidden () {
    this.setState({ isHidden: !this.state.isHidden })
  }
  
  render () {
    const { question, answer } = this.props
    const { isHidden } = this.state
    return (
      <div>
        <span>{question}</span>
        { !isHidden && <span>{answer}</span> }
        <button onClick={this.toggleHidden.bind(this)}>
          Reveal Answer
        </button>
      </div>
    )
  }
}


class Questions extends React.Component {

  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
    // this.toggle = this.toggle.bind(this);
    // this.state = { collapse: false };
    this.state = {
      // start the page with all questions closed
    	selectedQuestion: -1
    };
    this.openQuestion = this.openQuestion.bind(this);
    
  }

  // toggle() {
  //   this.setState(state => ({ collapse: !state.collapse }));
  // }
  openQuestion(index) {
    // when a question is opened, compare what was clicked and if we got a match, change state to show the desired question.
  	this.setState({
    	selectedQuestion: (this.state.selectedQuestion === index ? -1 : index)
    });
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
    const { details, expanded,selectedQuestion } = this.state;
    return (
      <div>
          {/* <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1"> */}
                <ul id="links">
                  <li><Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} >Topic1</Link></li>
                  <li><Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500} >Topic2</Link></li>
                  {/* <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Show/Hide Answer</Button> */}

                </ul>
              {/* </div>
            </div>
          </nav> */}

          <Element name="test1" className="element" >
          <div id="topic1">
            <h2>Topic1</h2>
            {questions.length && questions.map((item, index) => (
            <div key={`item-${index}`} className={`item ${this.state.selectedQuestion === index ? 'open' : ''}`}>
                <p className='question' >
                  {item.Question}
                  <img src={item.Image} />
                </p>
                <Button color="primary" onClick={() => this.openQuestion(index)} style={{ marginBottom: '1rem' }}>Answer</Button>
                <p className='answer'>
                  {item.Answer}
                  <img src={item.AnswerImage} />
                </p>
            </div>
          ))}
          </div>
        </Element>

          {/* <Element name="test1" className="element" >
          <div id="topic1">
            <h2>Topic1</h2>
              {Object.keys(questions).map(key => (
                <div>
                  {questions[key].type}
                  <p id="ques">{questions[key].Index}.  {questions[key].Question}</p>
                  <img src={questions[key].Image} key={key} />
                 <div>
                 <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Answer</Button>
                    <Collapse isOpen={this.state.collapse}>
                          <p id="ans">{questions[key].Answer}</p>
                          <img src={questions[key].AnswerImage} />
                    </Collapse>
                 </div>
                
                </div>
              ))}
          </div>
        </Element> */}

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

