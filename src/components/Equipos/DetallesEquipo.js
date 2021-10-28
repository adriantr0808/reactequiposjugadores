import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Gobal';
import { NavLink } from 'react-router-dom';

export default class DetallesEquipo extends Component {

    //Para guardar el equipo que me llegue
    state = {
        equipo: [],
        status: false
    }

    //cargo el equipo que me llegue por el id
    cargarEquipo = () => {

        var request = '/api/Equipos/' + this.props.ideq;
        var url = Global.urlchampions + request;

        axios.get(url).then(res => {
            this.setState({
                equipo: res.data,
                status: true
            });
        });
    }

    componentDidMount = () => {
        this.cargarEquipo();
    }

    componentDidUpdate = (oldprops) => {
        if (this.props.ideq !== oldprops.ideq) {
            this.cargarEquipo();
        }
    }

    render() {
        return (
            <div className='m-5'>
                <div className="card">
                    <div className="card-header">
                        {this.state.equipo.nombre}
                    </div>
                    <img width='150px' style={{ margin: 'auto' }} src={this.state.equipo.imagen} />
                    <div className="card-body">
                        <h5 className="card-title">Champions: {this.state.equipo.champions}</h5>
                        <p className="card-text">{this.state.equipo.descripcion}</p>
                        <NavLink className='btn btn-danger' to={'/jugadores/' + this.state.equipo.idEquipo}>Jugadores</NavLink>
                        <NavLink className='btn btn-primary m-4' to={'/'}>Volver</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}
