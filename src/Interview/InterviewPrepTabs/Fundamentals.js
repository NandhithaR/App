import React from "react"
import ReactDOM from "react-dom"
import YouTube from 'react-youtube';
import {Button} from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import Sidebar from './Sidebar'
import './style.css'
import { link } from "fs";

let snum = 0
let linkeClicked = false
const topiccontent1=[
  <p>content of topic 1</p>
];
const topiccontent2=[
  <p>content of topic 2</p>
];
const topiccontent3=[
  <p>content of topic 3</p>
];
const topiccontent4=[
  <p>content of topic 4</p>
];
const topiccontent5=[
  <p>content of topic 5</p>
];
const VideoContent = [
  topiccontent1,
  topiccontent2,
  topiccontent3,
  topiccontent4,
  topiccontent5
];

  const listItems = [
    {videoId:"CeD2L6KbtVM", topic_prev:"Last", topic_next:"Topic 2", topic_curr:"Introduction to Digital Circuits",content:VideoContent[0]},
    {videoId:"BqP6sVYlrr0", topic_prev:"Topic 1", topic_next:"Topic 3", topic_curr:"Introduction to Digital Circuits",content:VideoContent[1]},
    {videoId:"sUutDs7FFeA", topic_prev:"Topic 2", topic_next:"Topic 4", topic_curr:"Combinational Logic Basics",content:VideoContent[2] },
    {videoId:"XCiLHOZsQl8", topic_prev:"Topic 3", topic_next:"Topic 5", topic_curr:"Combinatioal Circuits",content:VideoContent[3] },
    {videoId:"FwJalVfvn50", topic_prev:"Topic 4", topic_curr:"Simplification", topic_next:"First",content:VideoContent[4]}
  ];


  function Sidebar(props){
    function displayPage(){
      linkeClicked = true
      snum= props.slidenum
      console.log(linkeClicked)
      return snum
    }
    return(
        <div>
            <Link id={props.slidenum} onClick={displayPage}>{props.linkname}</Link>
        </div>
    )
}


const Indicators = (props) => {
    const listIndicators = listItems.map((item, index) => 
      <div
        className={props.currentSlide === index ? 'active' : ''} 
        onClick={() => props.changeSlide(index)}
      ></div>
    );
    return (
      <ul className="indicators">
        {listIndicators}
      </ul>
    );
  };

  const opts = {
    height: '390',
    width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  };

function SlideItem(props){
    return(
      <div>
          <h1>{props.title}</h1>
          <YouTube
            videoId={props.videoId}
            opts={opts}
        />
        <p>{props.content}</p>
      </div>
    )
}

export class FundamentalsSlides extends React.Component {
    constructor(props) {
        super(props);
       this.state = {         
            slideshow: props.slide,         
            slideIndex: parseInt(snum)
       };
       this.currentIndex = parseInt(snum);
       this.pause = false;
     }
     goTo = (direction) => { 
         let index = parseInt(snum);
         switch(direction) {
          //  case 'auto':
          //    index = this.currentIndex + 1;
          //    this.currentIndex = index >= listItems.length ? 0 : index;          
          //  break;
           case 'prev':
             index = this.currentIndex - 1;
             this.currentIndex = index < 0 ? listItems.length - 1 : index;
             this.pause = true;
           break;
           case 'next':
             index = this.currentIndex + 1;
             console.log("next:",index);
             this.currentIndex = index >= listItems.length ? 0 : index;
             this.pause = true;
           break;
           default:
             this.currentIndex = direction;
             this.pause = true;
           break;
         }
         snum = this.currentIndex;
         console.log('pause:', this.pause);
          this.setState({
            slideIndex: this.currentIndex,
            slideshow: listItems[this.currentIndex]
          });
         
     };

  render() {
    return (
        <div>
        <SlideItem title={this.state.slideshow.topic_curr} videoId={this.state.slideshow.videoId} content={this.state.slideshow.content}/>
        <Indicators 
          changeSlide={this.goTo} // function
          currentSlide={this.state.slideIndex}
          />
        <div className="wrap-control">
          <Button className="btn btn-prev btn-success" value="Prev" onClick={() => this.goTo('prev')}>{this.state.slideshow.topic_prev}</Button>
          <Button className="btn btn-next btn-success" value="Next" onClick={() => this.goTo('next')}>{this.state.slideshow.topic_next}</Button>          
        </div>
        </div>

    );
  }
 

}
let k = 0
//const element = <FundamentalsSlides slide={listItems[0]}/>;
class Fundamentals extends React.Component{
  render(){
    if(linkeClicked==false)
    return(
      <FundamentalsSlides slide={listItems[snum]}/>    
  )
  else{
    linkeClicked=false;
    this.forceUpdate();
    return(
      <FundamentalsLinks />    
  )
  }
  }

}

function FundamentalsLinks(){
  return(
    <FundamentalsSlides  slide={listItems[snum]}/>
  )
}

export {Fundamentals,Sidebar}