import React from 'react'
import { Link } from 'react-router-dom'
import './stayle.css'
import imageLost from '../../image/horror.png'

const Lost = () => {
    return (
        <div className="list-lost">
            <div className="imageLost">
                <img src={imageLost}/>

            </div>
            <h1><Link to="/Categ" style={{textDecoration:"none", color:"white"}} >Try Again</Link></h1>
            <h1> <Link to="/"  style={{textDecoration:"none", color:"white"}} >Go Home</Link></h1>
        </div>
    )
}

export default Lost
