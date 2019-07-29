import React from "react"
import ReactDOM from "react-dom"
import YouTube from 'react-youtube';
import {Button} from "react-bootstrap";
import './style.css'

const opts = {
    height: '390',
    width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  };

  const listItems = [
    {videoId:"CeD2L6KbtVM", topic_prev:"Last", topic_next:"Topic 2", topic_curr:"Topic 1"},
    {videoId:"BqP6sVYlrr0", topic_prev:"Topic 1", topic_next:"Topic 3", topic_curr:"Topic 2"},
    {videoId:"sUutDs7FFeA", topic_prev:"Topic 2", topic_next:"Topic 4", topic_curr:"Topic 3" },
    {videoId:"XCiLHOZsQl8", topic_prev:"Topic 3", topic_next:"Topic 5", topic_curr:"Topic 4" },
    {videoId:"FwJalVfvn50", topic_prev:"Topic 4", topic_curr:"Topic 5", topic_next:"First"}
  ];

    

function SlideItem(props){
    return(
        <YouTube
            videoId={props.videoId}
            opts={opts}
        />
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
 
class FundamentalsSlides extends React.Component {
    constructor(props) {
        super(props);
       this.state = {         
            slideshow: props.slide,         
            slideIndex: 0
       };
       this.currentIndex = 0;
       this.pause = false;
     }
     
     goTo = (direction) => { 
         let index = 0;
         switch(direction) {
           case 'auto':
             index = this.currentIndex + 1;
             this.currentIndex = index >= listItems.length ? 0 : index;          
           break;
           case 'prev':
             index = this.currentIndex - 1;
             this.currentIndex = index < 0 ? listItems.length - 1 : index;
             this.pause = true;
           break;
           case 'next':
             index = this.currentIndex + 1;
             this.currentIndex = index >= listItems.length ? 0 : index;
             this.pause = true;
           break;
           default:
             this.currentIndex = direction;
             this.pause = true;
           break;
         }
         console.log('pause:', this.pause);
          this.setState({
            slideIndex: this.currentIndex,
            slideshow: listItems[this.currentIndex]
          });
         
     };
  render() {
    return (
        <div>
        <SlideItem videoId={this.state.slideshow.videoId} />
        <Indicators 
          changeSlide={this.goTo} // function
          currentSlide={this.state.slideIndex}
          />
        <div>Conent for the video</div>
        <div className="wrap-control">
          <Button className="btn btn-prev btn-success" value="Prev" onClick={() => this.goTo('prev')}>{this.state.slideshow.topic_prev}</Button>
          <Button className="btn btn-next btn-success" value="Next" onClick={() => this.goTo('next')}>{this.state.slideshow.topic_next}</Button>          
        </div>
        </div>

    );
  }
 

}

//const element = <FundamentalsSlides slide={listItems[0]}/>;
function Fundamentals(){
  return(
      <FundamentalsSlides slide={listItems[0]}/>
  )
}

export default Fundamentals