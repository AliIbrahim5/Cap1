import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

const Categ = () => {
  let bodyParts = ["NOSE", "TONGUE", "LEG", "HAND", "BACK"];
  let colors = ["RED", "BLACK", "BLUE", "WHITE", "PINK"];
  let animals = ["LION", "TIGER", "HORSE", "MONKEY", "CAT"];
  return (
    
      <div className="list-categ">
        <Link to={{pathname:"/play", state:{myCateg:bodyParts} }} style={{textDecoration:"none", color:"white"}} >
          <h1>bodyParts</h1>
        </Link>
        <Link to={{pathname:"/play", state:{myCateg:colors}} } style={{textDecoration:"none", color:"white"}} >
          <h1>colors</h1>
        </Link>
        <Link to={{pathname:"/play", state:{myCateg:animals}}} style={{textDecoration:"none", color:"white"}} > 
          <h1>animals</h1>
        </Link>
      </div>
      

    
  );
};

export default Categ;
