import './Header.css'
import React from 'react'

export default props =>
    /*d-none  faz desaparecer*/
    <header className="header d-sn-flex flex-column">
        <h1 className="nt-3">
        <i className={`fa fa-${props.icon}`}></i> {props.title}
        </h1>
        <p className="lead text-muted">{props.subtitle} </p>
    </header>
