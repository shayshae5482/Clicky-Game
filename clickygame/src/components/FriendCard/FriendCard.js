import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.id} src={props.image} />
    </div>
  <div 
  className="content">
      
    </div>
    <span onClick={() => props.handleClick(props.id)}>
      
    </span>
  </div>
);

export default FriendCard;
