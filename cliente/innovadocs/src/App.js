import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from "react-router-dom";
import InicioSesion from "./componentes/iniciosesion.js";
import Registro from "./componentes/registro.js";
import Asesores from "./componentes/asesores.js";

class Componente extends Component {
    render() {
        return (
            <div>OK</div>
        );
    }
}

class App extends Component {
    render() {
        return (
            <Router>
              <Switch>
                <Route exact path="/" component={Componente} />
                <Route path="/inicio-sesion" component={InicioSesion} />
                <Route path="/registro" component={Registro} />
                <Route path="/alumnos" component={Componente} />
                <Route path="/asesores" component={Asesores} />
                <Route path="/proyectos" component={Componente} />
              </Switch>
            </Router>
        );
    }
}

export default App;
