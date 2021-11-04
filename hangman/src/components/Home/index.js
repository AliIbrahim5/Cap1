import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div className="container">
      <div className="home">
        <div> <p className='nameGameB'>H</p> <p className='nameGameR'>A</p> <p className='nameGameB'>N</p> <p className='nameGameB'>G</p> <p className='nameGameB'>M</p> <p className='nameGameR'>A</p> <p className='nameGameB'>N</p></div>
         <Link to="/Categ" style={{ textDecoration: 'none', color:'white' }} > <h1>Play</h1></Link> <h1 className="h1_2">How to play</h1> <h1>About</h1>
      </div>
    </div>
  );
};

export default Home;