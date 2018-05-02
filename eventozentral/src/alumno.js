exports.consultar = json => conexion => {
    const { alumnoId } = json
    return conexion.query(
        `SELECT * ` +
            `FROM Alumno ` +
            `WHERE AlumnoId=${conexion.escape(alumnoId)}`
    )
}

exports.crear = json => conexion => {
    const {
        alumnoId,
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        sexoId,
        carreraId,
        tecnologicoId
    } = json
    return conexion.query(
        `INSERT INTO Alumno(` +
            `AlumnoId, ` +
            `AlumnoNombre, ` +
            `AlumnoApellidoPaterno,` +
            `AlumnoApellidoMaterno,` +
            `AlumnoSexoId,` +
            `AlumnoCarreraId,` +
            `AlumnoTecnologicoId` +
            `) ` +
            `VALUES(` +
            `${conexion.escape(alumnoId)}, ` +
            `${conexion.escape(nombre)}, ` +
            `${conexion.escape(apellidoPaterno)},` +
            `${conexion.escape(apellidoMaterno)},` +
            `${sexoId},` +
            `${conexion.escape(carreraId)},` +
            `${conexion.escape(tecnologicoId)}` +
            `)`
    ).then(_ => {
        return alumnoId
    })
}

exports.modificar = json => conexion => {
    const {
        alumnoId,
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        sexoId,
        carreraId,
        tecnologicoId
    } = json
    return conexion.query(
        `UPDATE Alumno ` +
            `SET ` +
            `AlumnoId=${conexion.escape(alumnoId)}, ` +
            `AlumnoNombre=${conexion.escape(nombre)}, ` +
            `AlumnoApellidoPaterno=${conexion.escape(apellidoPaterno)}, ` +
            `AlumnoApellidoMaterno=${conexion.escape(apellidoMaterno)}, ` +
            `AlumnoSexoId=${sexoId}, ` +
            `AlumnoCarreraId=${conexion.escape(carreraId)}, ` +
            `AlumnoTecnologicoId=${conexion.escape(tecnologicoId)} ` +
            `WHERE AlumnoId=${conexion.escape(alumnoId)}`
    ).then(_ => {
        return alumnoId
    })
}

exports.borrar = json => conexion => {
    const { alumnoId } = json
    return conexion.query(
        `DELETE FROM Alumno ` +
            `WHERE AlumnoId=${conexion.escape(alumnoId)}`
    ).then(resultado => {
        if (resultado.affectedRows > 0) {
            return alumnoId
        } else {
            throw Error('No se pudo eliminar')
        }
    })
}
