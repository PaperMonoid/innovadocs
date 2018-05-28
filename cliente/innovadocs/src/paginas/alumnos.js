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
import Alumno from "../servicios/alumno";

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

class FormaAgregarAlumno extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            nombre: "",
            apellidoMaterno: "",
            apellidoPaterno: "",
            genero: "",
            carreraId: "",
            tecnologicoId: "",
        };
    }

    manejarCambio = propiedad => evento => {
        this.setState({
             [propiedad]: evento.target.value
        });
    };

    agregar = evento => {
        evento.preventDefault();
        Alumno.insertar(this.state, this.props.token)
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
                label="Carrera"
                fullWidth={true}
                value={this.state.carreraId}
                onChange={this.manejarCambio("carreraId")}
                />
              <TextField
                label="Tecnológico"
                fullWidth={true}
                value={this.state.tecnologicoId}
                onChange={this.manejarCambio("tecnologicoId")}
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

class FormaEditarAlumno extends Component{

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            nuevaId: props.id,
            nombre: props.nombre,
            apellidoMaterno: props.apellidoMaterno,
            apellidoPaterno: props.apellidoPaterno,
            genero: props.genero,
            carreraId: props.carreraId,
            tecnologicoId: props.tecnologicoId,
        };
    }

    manejarCambio = propiedad => evento => {
        this.setState({
             [propiedad]: evento.target.value
        });
    };

    editar = evento => {
        evento.preventDefault();
        Alumno.editar(this.state, this.props.token)
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
                label="Carrera"
                fullWidth={true}
                value={this.state.carreraId}
                onChange={this.manejarCambio("carreraId")}
                />
              <TextField
                label="Tecnológico"
                fullWidth={true}
                value={this.state.tecnologicoId}
                onChange={this.manejarCambio("tecnologicoId")}
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

class Alumnos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            alumnos: [],
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

    alumnosRenglones = alumnos => (
        isEmpty(alumnos)
            ? (<CircularProgress />)
            : alumnos.map(
                alumno => (
                    <TableRow>
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={this.state.seleccionado == alumno.id}
                          onChange={this.enSeleccion(alumno.id)}/>
                        {alumno.id}
                      </TableCell>
                      <TableCell>{alumno.nombre}</TableCell>
                      <TableCell>{alumno.apellidoPaterno}</TableCell>
                      <TableCell>{alumno.apellidoMaterno}</TableCell>
                      <TableCell>{alumno.genero}</TableCell>
                      <TableCell>{alumno.carreraId}</TableCell>
                      <TableCell>{alumno.tecnologicoId}</TableCell>
                    </TableRow>
                )
            )
    );

    render() {
        const { alumnos, pagina, paginacion, total } = this.state;
        const { classes } = this.props;
        const alumno = find(propEq("id", this.state.seleccionado))(alumnos);
        return (
            <ComprobanteSesion enCarga={this.asignarToken}>
              <Plantilla>
                <Paper className={classes.forma}>
                  <Table>
                    <TableHead>
                      <Typography variant="title" id="tableTitle">
                        Alumnos
                      </Typography>
                      <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Apellido paterno</TableCell>
                        <TableCell>Apellido materno</TableCell>
                        <TableCell>Género</TableCell>
                        <TableCell>Carrera</TableCell>
                        <TableCell>Tecnológico</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {this.alumnosRenglones(alumnos)}
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
                    <FormaAgregarAlumno
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
                    <FormaEditarAlumno
                      classes={classes}
                      onCancel={this.cerrarEditar}
                      onSubmit={compose(this.cargar, this.cerrarEditar)}
                      token={this.state.token}
                      {...alumno}
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

    eliminarAlumno = evento => {
        Alumno.eliminar(this.state.seleccionado, this.state.token)
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
        Alumnos.obtener(pagina, this.state.token)
            .then(json => {
                this.setState({
                    alumnos: json.alumnos,
                    pagina: json.pagina,
                    paginacion: json.paginacion,
                    total: json.total,
                    seleccionado: null
                });
            });
    };

    cargar = e => {
        Alumnos.obtener(this.state.pagina, this.state.token)
            .then(json => {
                this.setState({
                    alumnos: json.alumnos,
                    pagina: json.pagina,
                    paginacion: json.paginacion,
                    total: json.total,
                    //seleccionado: null
                });
            })
            .then(alert);
    };
}


Alumnos.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(estilos)(Alumnos);
