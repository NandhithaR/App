import React from "react"
import ReactDOM from "react-dom"
import YouTube from 'react-youtube';
 
class Fundamentals extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
 
    return (
        <div>
        <YouTube
            videoId="2g811Eo7K8U"
            opts={opts}
            onReady={this._onReady}
        />
         <YouTube
            videoId="2g811Eo7K8U"
            opts={opts}
            onReady={this._onReady}
        />
        </div>

    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Fundamentals