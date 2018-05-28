import React, { Component } from "react";
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Drawer,
    Dialog,
    TextField,
    RadioGroup,
    Radio,
    Button,
    Paper,
    Icon
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import { Redirect, Link } from "react-router-dom";
import { httpGet, httpPost } from "../xmlhttp.js";
import Sesion from "./sesion.js";
import Plantilla from "./plantilla.js";
import ComprobanteSesion from "./comprobantesesion.js";

const estilos = {
    forma: {
        padding: 20
    },
    contenedor: {
        margin: "auto",
        marginTop: 30,
        padding: 30,
        width: 1200
    },
    contenedorAcciones: {
        position: "fixed",
        bottom: 20,
        right: 0
    },
    acciones: {
        marginRight: 20
    },
    alineado_derecha: {
        float: "right"
    }
};

class FormaAgregarAsesor extends Component {
    render() {
        return (
            <form style={estilos.forma} onSubmit={this.props.onSubmit}>
              <TextField
                floatingLabelText="Título"
                hintText="Título"
                fullWidth={true}
                {... this.props.titulo}
                />
              <TextField
                floatingLabelText="Nombre"
                hintText="Nombre"
                fullWidth={true}
                {... this.props.nombre}
                />
              <TextField
                floatingLabelText="Apellido paterno"
                hintText="Apellido paterno"
                fullWidth={true}
                {... this.props.apellidoPaterno}
                />
              <TextField
                floatingLabelText="Apellido materno"
                hintText="Apellido materno"
                fullWidth={true}
                {... this.props.apellidoMaterno}
                />
              <br/><br/>
              <small>Género</small>
              <RadioGroup defaultSelected="F">
                <Radio value="F" label="F"/>
                <Radio value="M" label="M"/>
              </RadioGroup>
              <TextField
                floatingLabelText="Teléfono"
                hintText="Teléfono"
                fullWidth={true}
                {... this.props.telefono}
                />
              <TextField
                floatingLabelText="Correo electrónico"
                hintText="Correo electrónico"
                fullWidth={true}
                {... this.props.correoElectronico}
                />
              <br/><br/>
              <Button variant="flat"
                label="Cancelar"
                secondary={true}
                onClick={this.props.onCancel}
                />
              <Button variant="flat"
                type="submit"
                label="Aceptar"
                primary={true}
                style={estilos.alineado_derecha}
                />
            </form>
        );
    }
}


class FormaEditarAsesor extends Component {
    render() {
        return (
            <form style={estilos.forma} onSubmit={this.props.onSubmit}>
              <TextField
                floatingLabelText="Id"
                hintText="Id"
                fullWidth={true}
                autoFocus={true}
                {... this.props.id}
                />
              <TextField
                floatingLabelText="Título"
                hintText="Título"
                fullWidth={true}
                {... this.props.titulo}
                />
              <TextField
                floatingLabelText="Nombre"
                hintText="Nombre"
                fullWidth={true}
                {... this.props.nombre}
                />
              <TextField
                floatingLabelText="Apellido paterno"
                hintText="Apellido paterno"
                fullWidth={true}
                {... this.props.apellidoPaterno}
                />
              <TextField
                floatingLabelText="Apellido materno"
                hintText="Apellido materno"
                fullWidth={true}
                {... this.props.apellidoMaterno}
                />
              <br/><br/>
              <small>Género</small>
              <RadioGroup defaultSelected="F">
                <Radio value="F" label="F"/>
                <Radio value="M" label="M"/>
              </RadioGroup>
              <TextField
                floatingLabelText="Teléfono"
                hintText="Teléfono"
                fullWidth={true}
                {... this.props.telefono}
                />
              <TextField
                floatingLabelText="Correo electrónico"
                hintText="Correo electrónico"
                fullWidth={true}
                {... this.props.correoElectronico}
                />
              <br/><br/>
              <Button variant="flat"
                label="Cancelar"
                secondary={true}
                onClick={this.props.onCancel}
                />
              <Button variant="flat"
                type="submit"
                label="Aceptar"
                primary={true}
                style={estilos.alineado_derecha}
                />
            </form>
        );
    }
}

const campos = {
    id: "Id",
    titulo: "titulo",
    nombre: "Nombre",
    apellidoPaterno: "Apellido Paterno",
    apellidoMaterno: "Apellido Materno",
    genero: "Genero",
    telefono: "Teléfono",
    correoElectronico: "Correo electrónico"
};

/*const asesores = [
    {
        id: 16211959,
        titulo: "Ing. Sistemas Computacionales",
        nombre: "Daniel Santiago",
        apellidoPaterno: "Aguila",
        apellidoMaterno: "Torres",
        genero: "H",
        telefono: "0123456789",
        correoElectronico: "daniel.aguila16@tectijuana.edu.mx"
    },
    {
        id: 115467,
        titulo: "Ing. Sistemas Computacionales",
        nombre: "Brandon Steve",
        apellidoPaterno: "Cota",
        apellidoMaterno: "Armenta",
        genero: "H",
        telefono: "0123456789",
        correoElectronico: "brandon.cota16@tectijuana.edu.mx"
    }
];*/

class AgregarAsesor extends Component {
    /*render() {
        return (
            <Dialog
              title="Agregar asesor"
              modal={true}
              open={this.props.open}
              autoScrollBodyContent={true}
              >
              <FormaAgregarAsesor
                onCancel={this.props.requestClose}
                onSubmit={this.enviar}
                />
            </Dialog>
        );
        }*/

    render() {
        return (
            <Drawer
              anchor="left"
              open={this.props.open}
              >
              <div
                tabIndex={0}
                role="button"
                onClick={this.props.requestClose}
                onKeyDown={this.props.requestClose}
                >
                <FormaAgregarAsesor
                  onCancel={this.props.requestClose}
                  onSubmit={this.enviar}
                  />
              </div>
            </Drawer>
        );
    }
    enviar = e => e.preventDefault();
}

class EditarAsesor extends Component {
    render() {
        return (
            <Dialog
              title="Editar asesor"
              modal={true}
              open={this.props.open}
              autoScrollBodyContent={true}
              >
              <FormaEditarAsesor
                onCancel={this.props.requestClose}
                onSubmit={this.enviar}
                />
            </Dialog>
        );
    }
    enviar = e => e.preventDefault();
}

class Asesores extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campos: campos,
            asesores: [],
            paginacion: 1,
            pagina: 1,
            total: 1,
            agregar: false,
            editar: false
        };
        this.cargar();
    }

    render() {
        return(
            <ComprobanteSesion>
              <Plantilla>
                <Paper style={estilos.contenedor}>
                  <Table
                    colSpan="3"
                    selectable={true}
                    multiSelectable={true}
                    fixedHeader={false}
                    style={{ width: "100%", tableLayout: "auto" }}
                    >
                    <TableHead
                      displaySelectAll={true}
                      adjustForCheckbox={true}
                      enableSelectAll={true}
                      >
                      <TableRow>
                        <TableCell>
                          <h1> Asesores </h1>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        {Object.keys(this.state.campos).map(llave => this.state.campos[llave]).map(titulo => (
                            <TableCell>{titulo}</TableCell>
                        ))}
            </TableRow>
                </TableHead>
                <TableBody
            displayRowCheckbox={true}
            deselectOnClickaway={false}
            showRowHover={false}
                >
                {this.state.asesores.map(entrada => (
                    <TableRow>
                      {Object.keys(entrada).map(llave => (
                          <TableCell>{entrada[llave]}</TableCell>
                      ))}
                    </TableRow>
                ))}
            </TableBody>
                </Table>
                </Paper>
                <div style={estilos.contenedorAcciones}>
                <Button
            variant="fab"
            style={estilos.acciones}
            onClick={this.abrirAgregar}
            secondary={true}
                >
                <DeleteIcon />
                </Button>
                <Button
            variant="fab"
            style={estilos.acciones}
            onClick={this.abrirEditar}
            secondary={true}
                >
                <Icon>edit_icon</Icon>
                </Button>
                <Button
            variant="fab"
            style={estilos.acciones}
            onClick={this.abrirAgregar}
            primary={true}
                >
                <AddIcon/>
                </Button>
                </div>
                <AgregarAsesor
            open={this.state.agregar}
            requestClose={this.cerrarAgregar}
                />
            </Plantilla>
                </ComprobanteSesion>
        );
    }

    manejarPaginacion = (e, pagina) => {
        pagina = Math.floor(pagina / this.state.paginacion) + 1;
        Sesion.tokenCrudo()
            .then(token => httpGet(
                "http://localhost:3002/asesor/" +
                    "?pagina=" + pagina +
                    "&token=" + token,
                {}))
            .then(JSON.parse)
            .then(json => {
                this.setState({
                    asesores: json.asesores,
                    paginacion: json.paginacion,
                    pagina: json.pagina,
                    total: json.total
                });
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    asesores: [],
                    paginacion: 1,
                    pagina: 0,
                    total: 1
                });
            });
    };

    abrirEditar = e => {
        this.setState({
            editar: true
        });
    };

    cerrarEditar = e => {
        this.setState({
            editar: true
        });
    };

    abrirAgregar = e => {
        this.setState({
            agregar: true
        });
    };

    cerrarAgregar = e => {
        this.setState({
            agregar: false
        });
    };

    actualizarEntrada = llave => evento => {
        const estado = {};
        estado[llave] = evento.target.value;
        this.setState(estado);
    }

    cargar() {
        Sesion.tokenCrudo()
            .then(token => httpGet(
                "http://localhost:3002/asesor/" +
                    "?pagina=" + this.state.pagina +
                    "&token=" + token,
                {}))
            .then(JSON.parse)
            .then(json => {
                this.setState({
                    asesores: json.asesores,
                    paginacion: json.paginacion,
                    pagina: json.pagina,
                    total: json.total
                });
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    asesores: [],
                    paginacion: 1,
                    pagina: 0,
                    total: 1
                });
            });
    }
}

export default Asesores;
