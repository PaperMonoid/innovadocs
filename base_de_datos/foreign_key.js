const mysql = require('promise-mysql')

connect = () => mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'InnovaDocs'
});

end = conexion => Promise.resolve(conexion => conexion.end());

const keys = [
    "Alumno.AlumnoGeneroId->Genero.GeneroId",
    "Alumno.AlumnoCarreraId->Carrera.CarreraId",
    "Alumno.AlumnoTecnologicoId->Tecnologico.TecnologicoId",
    "Asesor.AsesorGeneroId->Genero.GeneroId",
    "Acceso.AccesoUsuarioId->Usuario.UsuarioId",
    "Acceso.AccesoPrivilegioId->Privilegio.PrivilegioId",
    "Equipo.EquipoAsesorId->Asesor.AsesorId",
    "Equipo.EquipoEncargadoId->Encargado.EncargadoId",
    "Miembro.MiembroEquipoId->Equipo.EquipoId",
    "Miembro.MiembroAlumnoId->Alumno.AlumnoId",
    "Municipio.MunicipioEstadoId->Estado.EstadoId",
    "Proyecto.ProyectoEquipoId->Equipo.EquipoId",
    "Proyecto.ProyectoCategoriaId->Categoria.CategoriaId",
    "Tecnologico.TecnologicoMunicipioId->Municipio.MunicipioId"
];

const obj = keys
      .map(x => x.split('->'))
      .map(xs => xs.map(x =>x.split('.')))
      .map(xss => [
          {'table': xss[0][0], 'id': xss[0][1]},
          {'table': xss[1][0], 'id': xss[1][1]}
      ]);

const query = json =>
      `ALTER TABLE ${json[0].table} ADD FOREIGN KEY(${json[0].id}) REFERENCES ${json[1].table}(${json[1].id})`;

//const con = connect();

console.log(obj.map(query))
/*
    .map(con.query)
    .then(_ => console.log('ok'))
    .catch(_ => console.log('error'))
*/
