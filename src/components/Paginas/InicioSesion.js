import React from 'react'
import '../css/inicioSesion.css'


export const InicioSesion = () => {
    return (
        <div>
            
	<div className="login">
		<div className="login-screen">
			<div className="app-title">
				<h1>Login</h1>
			</div>
            <img src="./logoinicioSesion.png" width="100px"/>
			<form className="login-form" name="login">
				<div className="control-group">
				<input type="text" class="login-field" value="" placeholder="username" name="usuario"/>
				<label className="login-field-icon fui-user" for="usuario"></label>
				</div>

				<div className="control-group">
				<input type="password" class="login-field" value="" placeholder="password" name="password"/>
				<label className="login-field-icon fui-lock" for="password"></label>
				</div>

				<input value="Entrar" target="_parent" onclick="Login()" type="button" class="btn btn-success" />
				
			</form>
		</div>
	</div>
        </div>
    )
}