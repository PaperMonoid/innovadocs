import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
    Paper,
    TextField,
    Button,
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    DialogContentText
} from '@material-ui/core';
import Plantilla from "../vistas/plantilla";
import Sesion from "../servicios/sesion";

const estilos = {
    forma: {
        margin: "auto",
        marginTop: 100,
        width: 800,
        padding: 30
    },
    botonDerecha: {
        float: "right"
    }
};

class InicioSesion extends Component {

    constructor(props) {
        super(props);
        this.state = { id: "", clave: "", ventana: false };
    }

    manejarCambio = propiedad => evento => {
        this.setState({
             [propiedad]: evento.target.value
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <Plantilla>
              <Paper className={classes.forma}>
                <h1>
                  Inicio de sesión
                </h1>
                <form onSubmit={this.iniciarSesion}>
                  <TextField
                    label="Id"
                    value={this.state.id}
                    onChange={this.manejarCambio('id')}
                    margin="normal"
                    fullWidth={true}
                    autoFocus={true}
                    />
                  <TextField
                    label="Clave"
                    type="password"
                    value={this.state.clave}
                    onChange={this.manejarCambio('clave')}
                    margin="normal"
                    fullWidth={true}
                    />
                  <br/>
                  <br/>
                  <Link to="/admin/">
                    <Button
                      variant="flat"
                      color="primary"
                      >
                      Anterior
                    </Button>
                  </Link>
                  <Button
                    type="submit"
                    variant="raised"
                    color="primary"
                    className={classes.botonDerecha}
                    >
                    Siguiente
                  </Button>
                </form>
                <Dialog
                  modal={false}
                  open={this.state.ventana}
                  onClose={this.cerrarVentana}
                  >
                  <DialogTitle>
                    Error
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      No existe un usuario con esa contraseña.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      variant="flat"
                      onClick={this.cerrarVentana}
                      autoFocus={true}
                      >
                      Aceptar
                    </Button>
                  </DialogActions>
                </Dialog>
              </Paper>
            </Plantilla>
        );
    }

    iniciarSesion = evento => {
        evento.preventDefault();
        Sesion.iniciar(this.state.id, this.state.clave)
            .then(json => {
                if (json.token && json.id) {
                    return json;
                } else {
                    throw new Error();
                }
            })
            .then(_ => {
                this.props.history.push("/admin");
            })
            .catch(_ => {
                this.setState({
                    ventana: true
                });
            });
    };

    cerrarVentana = evento => {
        this.setState({
            ventana: false
        });
    };

}

InicioSesion.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(estilos)(InicioSesion);
