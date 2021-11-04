import React from 'react'
import { Link } from 'react-router-dom'
import './stayle.css'

const Lost = () => {
    return (
        <div className="list-lost">
            <h1>Lost</h1>
            <h1><Link to="/play">Try Again</Link></h1>
            <h1> <Link to="/">Go Home</Link></h1>
        </div>
    )
}

export default Lost
