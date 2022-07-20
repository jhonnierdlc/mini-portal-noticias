import React from 'react'
import { Link, NavLink } from "react-router-dom";

import '../css/navbar.css'

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <Link to='/'>
                        <img src='./news-logo.png' width="70px"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item" >
                                <Link className="nav-link" to='/' >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/noticias'>Noticias</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/'>Clima</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

