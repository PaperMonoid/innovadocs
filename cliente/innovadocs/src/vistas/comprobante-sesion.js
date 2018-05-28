import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { LinearProgress } from '@material-ui/core';
import Sesion from "../servicios/sesion";

class ComprobanteSesion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            token: null,
            id: null,
            estado: Sesion.Carga
        };
        Sesion.verificar()
            .then(json => {
                this.setState({
                    token: json.token,
                    id: json.id,
                    estado: Sesion.Activa
                });
                if (this.props.enCarga)
                    this.props.enCarga({
                        token: json.token,
                        id: json.id,
                        estado: Sesion.Activa
                    });
            })
            .catch(error => {
                this.setState({
                    token: null,
                    id: null,
                    estado: Sesion.Inactiva
                });
            });
    }

    render() {
        if (this.state.estado == Sesion.Activa) {
            return this.props.children
                ? this.props.children
                : null;
        } else if (this.state.estado == Sesion.Inactiva) {
            return (<Redirect to="/admin/inicio-sesion"/>);
        } else if (this.state.estado == Sesion.Carga) {
            return (<LinearProgress />);
        } else {
            return null;
        }
    }

}

export default ComprobanteSesion;
