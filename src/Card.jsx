import React from "react";
import './index.css';
function Card(props) {
  return(
    <div className="box">
      <img src={props.imgsrc} width="300" height="300"
      />
      <p style={{textAlign:"center"}}>A Netflix Original Series</p>
      <h1 style={{textAlign:"center",marginTop:"-10px"}}>{props.title}</h1>
    </div>
  )
}

export default Card;