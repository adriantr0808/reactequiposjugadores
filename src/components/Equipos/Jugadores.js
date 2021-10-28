import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Global from '../../Gobal';
import axios from 'axios';

export default class Jugadores extends Component {

    state = {
        jugadores: [],
        status: false
    }

    cargarJugadores = () => {
        var request = '/api/Jugadores/JugadoresEquipo/' + this.props.ideq;
        var url = Global.urlchampions + request;

        axios.get(url).then(res => {
            this.setState({
                jugadores: res.data,
                status: true
            });
        });

    }

    componentDidMount = () => {
        this.cargarJugadores();
    }
    render() {
        return (
            <div className='container'>
                <NavLink className='btn btn-success m-5' to={'/'}>Volver</NavLink>
                <table className='table table-dark table-striped '>
                    <thead>
                        <tr>
                            <th>
                                Nombre
                            </th>
                            <th>
                                Imagen
                            </th>
                            <th>
                                Detalles
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.jugadores.map((jug, index) => {
                            return (<tr key={index}>
                                <td>{jug.nombre}</td>
                                <td><img src={jug.imagen} /></td>
                                <td>
                                    <NavLink className='btn btn-warning m-5' to={'/detallesjugador/' + jug.idJugador}>Detalles</NavLink>
                                </td>
                            </tr>)
                        })}

                    </tbody>
                </table>



            </div >
        )
    }
}
