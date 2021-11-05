import React from 'react'
import { Link } from 'react-router-dom'
import imgaeWon from  "../../image/youWon.png"
import "./style.css"

const Won = () => {
    return (
        <div className="list-won">
            <img src={imgaeWon} style={{width:"300px"}} className='imgWon' alt="" />
            <h1><Link to="/Categ"  style={{textDecoration:"none", color:"white"}} >Try Again</Link></h1>
            <h1> <Link to="/"  style={{textDecoration:"none", color:"white"}} >Go Home</Link></h1>
        </div>
    )
}

export default Won
