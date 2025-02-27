import React from "react";
import './Card.css'

function Card({ children, style, className }) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

export default Card;
