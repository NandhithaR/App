import React from "react"
import ReactDOM from "react-dom"
import YouTube from 'react-youtube';

const opts = {
    height: '390',
    width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };

  const listItems = [
    {videoId:"CeD2L6KbtVM" },
    {videoId:"BqP6sVYlrr0" },
    {videoId:"sUutDs7FFeA" },
    {videoId:"XCiLHOZsQl8" },
    {videoId:"FwJalVfvn50" }
  ];

  function _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
    

function SlideItem(props){
    return(
        <YouTube
            videoId={props.videoId}
            opts={opts}
            onReady={_onReady}
        />
    )
}

const Indicators = (props) => {
    const listIndicators = listItems.map((item, index) => 
      <li
        className={props.currentSlide === index ? 'active' : ''} 
        onClick={() => props.changeSlide(index)}
      >{index + 1}</li>
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
        <div className="wrap-control">
          <button className="btn btn-prev" value="Prev" onClick={() => this.goTo('prev')}>Prev</button>   
          <button className="btn btn-next" value="Next" onClick={() => this.goTo('next')}>Next</button>          
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