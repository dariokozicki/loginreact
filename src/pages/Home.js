import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            <div>
                <h3>estoy en el home</h3>
                <form>
                    <Button>Registrarse</Button> 
                    <Link to="/about">Ingresar</Link>
                    <label>¿Contraseña olvidada?</label> 
                </form>
                
            </div>
        )
    }
}
