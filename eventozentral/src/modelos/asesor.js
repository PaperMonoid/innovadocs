const R = require("ramda");
const { obtenerIdInsertado, obtenerFilasAfectadas } = require("../bd.js");

const paginacion = 10;
const paginar = pagina => (pagina - 1) * paginacion;

const Asesor = json => ({
    "id": json["AsesorId"],
    "titulo": json["AsesorTitulo"],
    "nombre": json["AsesorNombre"],
    "apellidoPaterno": json["AsesorApellidoPaterno"],
    "apellidoMaterno": json["AsesorApellidoMaterno"],
    "genero": json["AsesorGeneroId"],
    "telefono": json["AsesorTelefono"],
    "correoElectronico": json["AsesorCorreoElectronico"],
});

const buscar = parametros => conexion =>
      conexion.query(
          "SELECT AsesorId, AsesorTitulo, AsesorNombre, AsesorApellidoPaterno, AsesorApellidoMaterno, AsesorGeneroId, AsesorTelefono, AsesorCorreoElectronico FROM Asesor WHERE AsesorId = ?",
          [
              parametros["id"]
          ]
      )
      .then(R.compose(R.head, R.map(Asesor)));

const buscarTodos = parametros => conexion =>
      conexion.query(
          "SELECT AsesorId, AsesorTitulo, AsesorNombre, AsesorApellidoPaterno, AsesorApellidoMaterno, AsesorGeneroId, AsesorTelefono, AsesorCorreoElectronico FROM Asesor LIMIT ?, ?",
          [
              paginar(parametros["pagina"]),
              paginacion
          ]
      )
      .then(R.map(Asesor));

const crear = parametros => conexion =>
      conexion.query(
          "INSERT INTO Asesor(AsesorId, AsesorTitulo, AsesorNombre, AsesorApellidoPaterno, AsesorApellidoMaterno, AsesorGeneroId, AsesorTelefono, AsesorCorreoElectronico) VALUES(?, ?, ?, ?, ?, ?, ?, ?)",
          [
              parametros.nuevaId,
              parametros.titulo,
              parametros.nombre,
              parametros.apellidoPaterno,
              parametros.apellidoMaterno,
              parametros.genero,
              parametros.telefono,
              parametros.correoElectronico
          ]
      )
      .then(obtenerIdInsertado);

const modificar = parametros => conexion =>
      conexion.query(
          "UPDATE Asesor SET AsesorId = ?, AsesorTitulo = ?, AsesorNombre = ?, AsesorApellidoPaterno = ?, AsesorApellidoMaterno = ?, AsesorGeneroId = ?, AsesorTelefono = ?, AsesorCorreoElectronico = ? WHERE AsesorId = ?",
          [
              parametros.nuevaId,
              parametros.titulo,
              parametros.nombre,
              parametros.apellidoPaterno,
              parametros.apellidoMaterno,
              parametros.genero,
              parametros.telefono,
              parametros.correoElectronico,
              parametros.id
          ]
      )
      .then(obtenerFilasAfectadas);

const eliminar = parametros => conexion =>
      conexion.query(
          "DELETE FROM Asesor WHERE AsesorId = ?",
          [
              parametros.id
          ]
      )
      .then(obtenerFilasAfectadas);

module.exports = {
    "Asesor": Asesor,
    "buscar": buscar,
    "buscarTodos": buscarTodos,
    "crear": crear,
    "modificar": modificar,
    "eliminar": eliminar
}
