import './Logo.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="logo">
        <Link to="/">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRU8OWsA-3QWZIgYxUf-FVhpvTRAD5uxED_8Q&usqp=CAU" alt=""/>
           </Link>
    </aside>