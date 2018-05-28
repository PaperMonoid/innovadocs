import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from "react-router-dom";
import Admin from "./paginas/admin";
import InicioSesion from "./paginas/inicio-sesion";
import Asesores from "./paginas/asesores";
import Alumnos from "./paginas/alumnos";
//import InicioSesion from "./paginas/admin.js";
//import Registro from "./paginas/admin-registro.js";
//import Asesores from "./paginas/admin-asesores.js";

class Componente extends Component {
    render() {
        return (
            <div>Usuario</div>
        );
    }
}

class App extends Component {
    render() {
        return (
            <Router>
              <Switch>
                <Route exact path="/" component={Componente} />
                <Route exact path="/admin" component={Admin} />
                <Route path="/admin/inicio-sesion" component={InicioSesion} />
                <Route path="/admin/asesores" component={Asesores} />
                <Route path="/admin/alumnos" component={Alumnos} />
              </Switch>
            </Router>
        );
    }
}

/*

                <Route path="/admin/inicio-sesion" component={InicioSesion} />
                <Route path="/admin/alumnos" component={Componente} />
                <Route path="/admin/asesores" component={Asesores} />
                <Route path="/admin/proyectos" component={Componente} />
*/

export default App;
