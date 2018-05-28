import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    TableFooter,
    CircularProgress,
    Typography,
    Button,
    Drawer,
    TextField,
    RadioGroup,
    Radio,
    FormControlLabel,
    Checkbox,
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    DialogContentText
} from '@material-ui/core';
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { compose, objOf, mapObjIndexed, find, propEq, isEmpty } from "ramda";
import Plantilla from "../vistas/plantilla";
import ComprobanteSesion from "../vistas/comprobante-sesion";
import Asesor from "../servicios/asesor";

const estilos = {
    forma: {
        margin: "auto",
        marginTop: 100,
        width: "90%",
        padding: 30
    },
    formas: {
        margin: "auto",
        width: "100%",
        padding: 30,
        boxSizing: "border-box"
    },
    botonDerecha: {
        float: "right"
    },
    innovatec: {
        margin: 10,
        fontSize: "2em"
    },
    acciones: {
        marginRight: 20
    },
    contenedorAcciones: {
        position: "fixed",
        bottom: 20,
        right: 0
    }
};

class FormaAgregarAsesor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            titulo: "",
            nombre: "",
            apellidoMaterno: "",
            apellidoPaterno: "",
            genero: "",
            correoElectronico: "",
            telefono: "",
        };
    }

    manejarCambio = propiedad => evento => {
        this.setState({
             [propiedad]: evento.target.value
        });
    };

    agregar = evento => {
        evento.preventDefault();
        Asesor.insertar(this.state, this.props.token)
            .then(alert)
            .then(this.props.onSubmit);
    };

    render() {
        const { classes } = this.props;
        return (
            <form className={classes.formas} onSubmit={this.agregar}>
              <Typography variant="title">
                Agregar asesor
              </Typography>
              <TextField
                label="Id"
                autoFocus={true}
                fullWidth={true}
                value={this.state.id}
                onChange={this.manejarCambio("id")}
                />
              <TextField
                label="Título"
                fullWidth={true}
                value={this.state.titulo}
                onChange={this.manejarCambio("titulo")}
                />
              <TextField
                label="Nombre"
                fullWidth={true}
                value={this.state.nombre}
                onChange={this.manejarCambio("nombre")}
                />
              <TextField
                label="Apellido paterno"
                fullWidth={true}
                value={this.state.apellidoPaterno}
                onChange={this.manejarCambio("apellidoPaterno")}
                />
              <TextField
                label="Apellido materno"
                fullWidth={true}
                value={this.state.apellidoMaterno}
                onChange={this.manejarCambio("apellidoMaterno")}
                />
              <br/><br/>
              <small>Género</small>
              <RadioGroup
                value={this.state.genero}
                onChange={this.manejarCambio("genero")}
                >
                <FormControlLabel value="F" control={<Radio />} label="F" />
                <FormControlLabel value="M" control={<Radio />} label="M" />
              </RadioGroup>
              <TextField
                label="Teléfono"
                fullWidth={true}
                value={this.state.telefono}
                onChange={this.manejarCambio("telefono")}
                />
              <TextField
                label="Correo electrónico"
                fullWidth={true}
                value={this.state.correoElectronico}
                onChange={this.manejarCambio("correoElectronico")}
                />
              <br/><br/>
              <Button
                variant="flat"
                color="secondary"
                onClick={this.props.onCancel}
                >
                Cancelar
              </Button>
              <Button
                variant="flat"
                type="submit"
                color="primary"
                className={classes.botonDerecha}
                >
                Aceptar
              </Button>
            </form>
        );
    }
}

class FormaEditarAsesor extends Component{

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            nuevaId: props.id,
            titulo: props.titulo,
            nombre: props.nombre,
            apellidoMaterno: props.apellidoMaterno,
            apellidoPaterno: props.apellidoPaterno,
            genero: props.genero,
            correoElectronico: props.correoElectronico,
            telefono: props.telefono,
        };
    }

    manejarCambio = propiedad => evento => {
        this.setState({
             [propiedad]: evento.target.value
        });
    };

    editar = evento => {
        evento.preventDefault();
        Asesor.editar(this.state, this.props.token)
            .then(alert)
            .then(this.props.onSubmit);
    };

    render() {
        const { classes } = this.props;
        return (
            <form className={classes.formas} onSubmit={this.editar}>
              <Typography variant="title">
                Editar asesor
              </Typography>
              <TextField
                label="Id"
                autoFocus={true}
                fullWidth={true}
                value={this.state.nuevaId}
                onChange={this.manejarCambio("nuevaId")}
                />
              <TextField
                label="Título"
                fullWidth={true}
                value={this.state.titulo}
                onChange={this.manejarCambio("titulo")}
                />
              <TextField
                label="Nombre"
                fullWidth={true}
                value={this.state.nombre}
                onChange={this.manejarCambio("nombre")}
                />
              <TextField
                label="Apellido paterno"
                fullWidth={true}
                value={this.state.apellidoPaterno}
                onChange={this.manejarCambio("apellidoPaterno")}
                />
              <TextField
                label="Apellido materno"
                fullWidth={true}
                value={this.state.apellidoMaterno}
                onChange={this.manejarCambio("apellidoMaterno")}
                />
              <br/><br/>
              <small>Género</small>
              <RadioGroup
                value={this.state.genero}
                onChange={this.manejarCambio("genero")}
                >
                <FormControlLabel value="F" control={<Radio />} label="F" />
                <FormControlLabel value="M" control={<Radio />} label="M" />
              </RadioGroup>
              <TextField
                label="Teléfono"
                fullWidth={true}
                value={this.state.telefono}
                onChange={this.manejarCambio("telefono")}
                />
              <TextField
                label="Correo electrónico"
                fullWidth={true}
                value={this.state.correoElectronico}
                onChange={this.manejarCambio("correoElectronico")}
                />
              <br/><br/>
              <Button
                variant="flat"
                color="secondary"
                onClick={this.props.onCancel}
                >
                Cancelar
              </Button>
              <Button
                variant="flat"
                type="submit"
                color="primary"
                className={classes.botonDerecha}
                >
                Aceptar
              </Button>
            </form>
        );
    }
}

class Asesores extends Component {

    constructor(props) {
        super(props);
        this.state = {
            asesores: [],
            pagina: 0,
            paginacion: 0,
            total: 0,
            token: null,
            agregar: false,
            editar: false,
            eliminar: false,
            seleccionado: null
        };
    }

    asignarToken = estado => {
        this.setState({
            token: estado.token
        });
        this.cargar();
    };

    enSeleccion = id => evento => {
        this.setState({
            seleccionado: this.state.seleccionado == id ? null : id
        });
    };

    asesoresRenglones = asesores => (
        isEmpty(asesores)
            ? (<CircularProgress />)
            : asesores.map(
                asesor => (
                    <TableRow>
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={this.state.seleccionado == asesor.id}
                          onChange={this.enSeleccion(asesor.id)}/>
                        {asesor.id}
                      </TableCell>
                      <TableCell>{asesor.titulo}</TableCell>
                      <TableCell>{asesor.nombre}</TableCell>
                      <TableCell>{asesor.apellidoPaterno}</TableCell>
                      <TableCell>{asesor.apellidoMaterno}</TableCell>
                      <TableCell>{asesor.genero}</TableCell>
                      <TableCell>{asesor.telefono}</TableCell>
                      <TableCell>{asesor.correoElectronico}</TableCell>
                    </TableRow>
                )
            )
    );

    render() {
        const { asesores, pagina, paginacion, total } = this.state;
        const { classes } = this.props;
        const asesor = find(propEq("id", this.state.seleccionado))(asesores);
        return (
            <ComprobanteSesion enCarga={this.asignarToken}>
              <Plantilla>
                <Paper className={classes.forma}>
                  <Table>
                    <TableHead>
                      <Typography variant="title" id="tableTitle">
                        Asesores
                      </Typography>
                      <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Título</TableCell>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Apellido paterno</TableCell>
                        <TableCell>Apellido materno</TableCell>
                        <TableCell>Género</TableCell>
                        <TableCell>Teléfono</TableCell>
                        <TableCell>Correo electrónico</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {this.asesoresRenglones(asesores)}
                    </TableBody>
                    <TableFooter>
                      <TableRow>
                        <TablePagination
                          colSpan={3}
                          count={total}
                          rowsPerPage={paginacion}
                          page={pagina}
                          onChangePage={this.cambioPagina}
                          />
                      </TableRow>
                    </TableFooter>
                  </Table>
                  <div className={classes.contenedorAcciones}>
                    <Button
                      variant="fab"
                      className={classes.acciones}
                      onClick={this.abrirEliminar}
                      color="secondary"
                      >
                      <DeleteIcon />
                    </Button>
                    <Button
                      variant="fab"
                      className={classes.acciones}
                      onClick={this.abrirEditar}
                      color="secondary"
                      >
                      <EditIcon />
                    </Button>
                    <Button
                      variant="fab"
                      className={classes.acciones}
                      onClick={this.abrirAgregar}
                      color="primary"
                      >
                      <AddIcon/>
                    </Button>
                  </div>
                  <Drawer
                    anchor="top"
                    open={this.state.agregar}
                    onClose={this.cerrarAgregar}>
                    <FormaAgregarAsesor
                      classes={classes}
                      onCancel={this.cerrarAgregar}
                      onSubmit={compose(this.cargar, this.cerrarAgregar)}
                      token={this.state.token}
                      />
                  </Drawer>
                  <Drawer
                    anchor="right"
                    open={this.state.editar}
                    onClose={this.cerrarEditar}>
                    <FormaEditarAsesor
                      classes={classes}
                      onCancel={this.cerrarEditar}
                      onSubmit={compose(this.cargar, this.cerrarEditar)}
                      token={this.state.token}
                      {...asesor}
                      />
                  </Drawer>
                  <Dialog
                    disableBackdropClick
                    disableEscapeKeyDown
                    maxWidth="xs"
                    open={this.state.eliminar}
                    >
                    <DialogTitle>Eliminar asesor</DialogTitle>
                    <DialogContent>
                      ¿Desea eliminar?
                    </DialogContent>
                    <DialogActions>
                      <Button variant="raised" onClick={this.cerrarEliminar} color="secondary">
                        Cancelar
                      </Button>
                      <Button  variant="raised" onClick={this.eliminarAsesor} color="primary">
                        Aceptar
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Paper>
              </Plantilla>
            </ComprobanteSesion>
        );
    }

    abrirEliminar = evento => {
        if (this.state.seleccionado)
            this.setState({
                eliminar: true
            });
    };

    cerrarEliminar = evento => {
        this.setState({
            eliminar: false
        });
    };

    eliminarAsesor = evento => {
        console.log(this.state.token);
        Asesor.eliminar(this.state.seleccionado, this.state.token)
            .then(_ => {
                this.setState({
                    seleccionado: null
                });
            })
            .then(this.cerrarEliminar)
            .then(this.cargar);
    };


    abrirEditar = evento => {
        if (this.state.seleccionado)
            this.setState({
                editar: true
            });
    };

    cerrarEditar = evento => {
        this.setState({
            editar: false
        });
    };

    abrirAgregar = evento => {
        this.setState({
            agregar: true
        });
    };

    cerrarAgregar = evento => {
        this.setState({
            agregar: false
        });
    };

    cambioPagina = (objecto, pagina) => {
        Asesor.obtener(pagina, this.state.token)
            .then(json => {
                this.setState({
                    asesores: json.asesores,
                    pagina: json.pagina,
                    paginacion: json.paginacion,
                    total: json.total,
                    seleccionado: null
                });
            });
    };

    cargar = e => {
        Asesor.obtener(this.state.pagina, this.state.token)
            .then(json => {
                this.setState({
                    asesores: json.asesores,
                    pagina: json.pagina,
                    paginacion: json.paginacion,
                    total: json.total,
                    //seleccionado: null
                });
            });
    };
}


Asesores.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(estilos)(Asesores);
