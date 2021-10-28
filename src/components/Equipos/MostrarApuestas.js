import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Gobal';
import { NavLink } from 'react-router-dom';

export default class MostrarApuestas extends Component {

    state = {
        apuestas: [],
        status: false
    }

    cargarApuestas = () => {
        var request = '/api/Apuestas';
        var url = Global.urlchampions + request;
        axios.get(url).then(res => {
            this.setState({
                apuestas: res.data,
                status: true
            })
        })
    }


    componentDidMount = () => {
        this.cargarApuestas();
    }
    render() {
        return (
            <div>
                <h1 className='m-5'>Apuestas</h1>
                <NavLink className='btn btn-danger m-4' to={'/insertarapuesta'}>Realizar Apuesta</NavLink>
                <table className='table table-dark table-striped'>
                    <thead>
                        <tr>
                            <th>
                                Usuario
                            </th>
                            <th>
                                Resultado
                            </th>
                            <th>
                                Fecha
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.apuestas.map((ap, index) => {
                            return (<tr key={index}>
                                <td>{ap.usuario}</td>
                                <td>{ap.resultado}</td>
                                <td>{ap.fecha}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
