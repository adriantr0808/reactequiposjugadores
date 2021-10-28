import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MenuEquipos from './Equipos/MenuEquipos';
import Home from './Equipos/Home';
import DetallesEquipo from './Equipos/DetallesEquipo';
import Jugadores from './Equipos/Jugadores';
import DetallesJugador from './Equipos/DetallesJugador';
import MostrarApuestas from './Equipos/MostrarApuestas';
import InsertarApuesta from './Equipos/InsertarApuesta';


export default class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <MenuEquipos />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/detallesequipo/:idequipo'

                            render={props => {
                                var id = props.match.params.idequipo
                                return (<DetallesEquipo ideq={id} />)
                            }}

                        />
                        <Route exact path='/jugadores/:idequipo'

                            render={props => {
                                var id = props.match.params.idequipo;
                                return (<Jugadores ideq={id} />);
                            }}

                        />

                        <Route exact path='/detallesjugador/:idjug'

                            render={props => {
                                var id = props.match.params.idjug;
                                return (<DetallesJugador idJug={id} />)
                            }}

                        />

                        <Route exact path='/apuestas' component={MostrarApuestas} />
                        <Route exact path='/insertarapuesta' component={InsertarApuesta} />
                    </Switch>

                </BrowserRouter>
            </div>
        )
    }
}
