exports.consultar = json => conexion => {
    const { proyectoClave } = json
    return conexion.query(
        `SELECT * ` +
            `FROM Proyecto ` +
            `WHERE ProyectoId=${conexion.escape(proyectoId)}`
    )
}

exports.crear = json => conexion => {
    const {
        nombre,
        descripcion,
        descripcionLarga,
        imagen,
        vistas,
        interes,
        equipoId,
        categoriaId
    } = json
    return conexion.query(
        `INSERT INTO Proyecto(` +
            `ProyectoNombre, ` +
            `ProyectoFecha, ` +
            `ProyectoDescripcion, ` +
            `ProyectoDescripcionLarga, ` +
            `ProyectoImagen, ` +
            `ProyectoVistas, ` +
            `ProyectoInteres, ` +
            `ProyectoEquipoId, ` +
            `ProyectoCategoriaId` +
            `) ` +
            `VALUES(` +
            `${conexion.escape(nombre)}, ` +
            `NOW(), ` +
            `${conexion.escape(descripcion)}, ` +
            `${conexion.escape(descripcionLarga)}, ` +
            `${conexion.escape(imagen)}, ` +
            `${conexion.escape(vistas)}, ` +
            `${conexion.escape(interes)}, ` +
            `${conexion.escape(equipoId)}, ` +
            `${conexion.escape(categoriaId)}` +
            `)`
    ).then(resultado => {
        return resultado.lastInserted
    })
}

exports.modificar = json => conexion => {
    const {
        proyectoId,
        fecha,
        nombre,
        descripcion,
        descripcionLarga,
        imagen,
        vistas,
        interes,
        equipoId,
        categoriaId
    } = json
    return conexion.query(
        `UPDATE Proyecto ` +
            `SET ` +
            `ProyectoId=${conexion.escape(proyectoId)}, ` +
            `ProyectoNombre=${conexion.escape(nombre)}, ` +
            `ProyectoFecha=NOW(), ` +
            `ProyectoDescripcion=${conexion.escape(descripcion)}, ` +
            `ProyectoDescripcionLarga=${conexion.escape(descripcionLarga)}, ` +
            `ProyectoImagen=${conexion.escape(imagen)}, ` +
            `ProyectoVistas=${conexion.escape(vistas)}, ` +
            `ProyectoInteres=${conexion.escape(interes)}, ` +
            `ProyectoEquipoId=${conexion.escape(equipoId)}, ` +
            `ProyectoCategoriaId=${conexion.escape(categoriaId)} ` +
            `WHERE ProyectoId=${conexion.escape(proyectoId)}`
    ).then(_ => {
        return proyectoId
    })
}

exports.borrar = json => conexion => {
    const { proyectoClave } = json
    return conexion.query(
        `DELETE FROM Proyecto ` +
            `WHERE ProyectoId=${conexion.escape(proyectoId)}`
    ).then(resultado => {
        if (resultado.affectedRows > 0) {
            return proyectoClave
        } else {
            throw Error('No se pudo eliminar')
        }
    })
}
