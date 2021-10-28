import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import Global from '../../Gobal';

export default class MenuEquipos extends Component {


    state = {
        equipos: [],
        status: false
    }

    cargarEquipos = () => {
        var request = '/api/Equipos';
        var url = Global.urlchampions + request;

        axios.get(url).then(res => {
            this.setState({
                equipos: res.data,
                status: true
            });
        });
    }

    componentDidMount = () => {
        this.cargarEquipos();
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Champions</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className='nav-link' to={'/'}>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className='nav-link' to={'/apuestas'}>Apuestas</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Equipos
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">

                                        {this.state.equipos.map((eq, index) => {
                                            return (<li key={index}><NavLink className="dropdown-item nav-link-dark" to={'/detallesequipo/' + eq.idEquipo} >{eq.nombre}</NavLink></li>);
                                        })}
                                    </ul>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
