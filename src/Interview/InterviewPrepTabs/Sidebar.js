import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Sidebar(props){
    function displayPage(){
      console.log(props.slidenum)
      return props.slidenum
    }
    return(
        <div>
            <Link id={props.slidenum} onClick={displayPage}>{props.linkname}</Link>
        </div>
    )
}

export default Sidebar