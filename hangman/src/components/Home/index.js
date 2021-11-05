import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div className="container">
      <div className="home">
        <div> <p className='nameGameB'>H</p> <p className='nameGameR'>A</p> <p className='nameGameB'>N</p> <p className='nameGameB'>G</p> <p className='nameGameB'>M</p> <p className='nameGameR'>A</p> <p className='nameGameB'>N</p></div>
         <Link to="/Categ" style={{ textDecoration: 'none', color:'white' }} > <h1>Play</h1></Link> <Link to="/Howplay" style={{ textDecoration: 'none', color:'white' }} > <h1 className="h1_2">how to play</h1></Link> <Link to="/About" style={{ textDecoration: 'none', color:'white' }} > <h1 className="h1_2">About</h1></Link>
      </div>
    </div>
  );
};

export default Home;