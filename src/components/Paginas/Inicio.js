import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "./CerrarSesion";
import '../css/inicio.css'


export const Inicio = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        
        
        
      </div>
    )
  );
};