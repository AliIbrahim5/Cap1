import React from "react";
import { Link } from "react-router-dom";

const Categ = () => {
  let bodyParts = ["NOSE", "TONGUE", "LEG", "HAND", "BACK"];
  let colors = ["AFG", "TONGUE", "LEG", "HAND", "BACK"];
  let animals = ["ASF", "TONGUE", "LEG", "HAND", "BACK"];
  return (
    <div>
      <div>
        <Link to={{pathname:"/play", state:{myCateg:bodyParts} }}>
          <h1>bodyParts</h1>
        </Link>
        <Link to={{pathname:"/play", state:{myCateg:colors}} }>
          <h1>colors</h1>
        </Link>
        <Link to={{pathname:"/play", state:{myCateg:animals}}}>
          <h1>animals</h1>
        </Link>
      </div>
      

    </div>
  );
};

export default Categ;
