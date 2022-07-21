import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "../Paginas/CerrarSesion";

import '../css/navbar.css'

export const Navbar = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

    return (
        isAuthenticated && (
            <div>
                
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">
                        <img src='./news-logo.png' width="70px"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#"><strong>Noticias</strong></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><strong>Clima</strong></a>
                            </li>
                        </ul>
                        <img src={user.picture} width="40px"  alt={user.name} />
                        <h6>{user.name}</h6>
                        <LogoutButton/>
                    </div>
                </nav>
            </div>
          )
    )
}

