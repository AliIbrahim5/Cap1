import React from "react";
import "./style.css";
import imageError from "../../image/error404.png";
import { useHistory } from "react-router";
const Error404 = () => {
  const history = useHistory();
  const backHome = () => {
      history.push('/')
  };
  return (
    <div className="error404" >
      <div className="imgError" onClick={backHome} style={{cursor:"pointer"}}>
        <img src={imageError} alt="error404" />
      </div>
    </div>
  );
};

export default Error404;
