import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Gobal';
import { Redirect } from 'react-router';

export default class InsertarApuesta extends Component {

    usuRef = React.createRef();
    resLocRef = React.createRef();
    resVisRef = React.createRef();
    fechRef = React.createRef();

    state = {

        status: false
    }

    agregarApuesta = (e) => {
        e.preventDefault();
        var usu = this.usuRef.current.value;
        var res = this.resLocRef.current.value + "-" + this.resVisRef.current.value;
        var fecha = this.fechRef.current.value;

        console.log(usu, res, fecha);

        var apuesta = {
            idApuesta: 0,
            usuario: usu,
            resultado: res,
            fecha: fecha
        }
        console.log(apuesta);

        var request = '/api/Apuestas';
        var url = Global.urlchampions + request;
        axios.post(url, apuesta).then(res => {
            this.setState({
                status: true
            })
        });
    }




    render() {
        if (this.state.status == true) {
            return (<Redirect to='/apuestas'></Redirect>)
        }
        return (
            <div className='container'>
                <h1 className='m-4'>Realizar Apuesta</h1>
                <div className='bg-info'>
                    <form onSubmit={this.agregarApuesta} style={{ width: '500px', margin: '0 auto', padding: '1em' }} >

                        <div className='mb-3 form-group row'>
                            <label>Introducir Usuario: </label>
                            <input type='text' className='form-control' ref={this.usuRef} />
                        </div>
                        <div className='mb-3 form-group row'>
                            <label>Real Madrid: </label>
                            <input type='number' className='form-control' ref={this.resLocRef} />
                        </div>
                        <div className='mb-3 form-group row'>
                            <label>Atletico de Madrid: </label>
                            <input type='number' className='form-control' ref={this.resVisRef} />
                        </div>




                        <div className='mb-3 form-group row'>
                            <label>Introducir fecha: </label>
                            <input type='date' className='form-control' ref={this.fechRef} />
                        </div>
                        <button className='btn btn-success m-4'>Apostar</button>
                    </form>
                </div>
            </div>
        )
    }
}
