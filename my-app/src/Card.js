import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Card({ children, style, className }) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

export default Card;
