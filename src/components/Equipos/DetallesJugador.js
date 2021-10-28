import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Gobal';
import { NavLink } from 'react-router-dom';

export default class DetallesJugador extends Component {


    //Guardar jugador que me llega para pintar
    state = {
        jugador: [],
        status: false
    }

    //Recibir jugador que me llega
    cargarJugador = () => {

        var request = '/api/Jugadores/' + this.props.idJug;
        var url = Global.urlchampions + request;
        axios.get(url).then(res => {
            this.setState({
                jugador: res.data,
                status: true
            })
        })
    }

    componentDidMount = () => {
        this.cargarJugador();
    }
    render() {
        return (
            <div class='container'>
                <h1 className='m-5'>Detalles de jugador</h1>
                <div className="card" >

                    <img src={this.state.jugador.imagen} className="w-50  m-auto card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.state.jugador.nombre}</h5>
                        <p className="card-text">Posicion: {this.state.jugador.posicion}</p>
                        <p className="card-text">Posicion: {this.state.jugador.fechaNacimiento}</p>

                    </div>

                </div>
                <NavLink to={'/jugadores/' + this.state.jugador.idEquipo} className='btn btn-success'>Jugadores</NavLink>
            </div>
        )
    }
}
