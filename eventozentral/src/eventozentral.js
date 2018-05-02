const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const mergeJSON = require('merge-json')

const bd = require('./bd.js')
const alumno = require('./alumno.js')
//const proyecto = require('./proyecto.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

const enviar = respuesta => dato => respuesta.send(dato)

// REST API de los alumnos.
app.post(
    '/alumno',
    (peticion, respuesta) =>
        bd.conectar()
        .then(alumno.crear(mergeJSON.merge(peticion.params, peticion.body)))
        .then(enviar(respuesta))
        .then(bd.terminar)
)

app.put(
    '/alumno/:alumnoId',
    (peticion, respuesta) =>
        bd.conectar()
        .then(alumno.modificar(mergeJSON.merge(peticion.params, peticion.body)))
        .then(enviar(respuesta))
        .then(bd.terminar)
)

app.get(
    '/alumno/:alumnoId',
    (peticion, respuesta) =>
        bd.conectar()
        .then(alumno.consultar(peticion.params))
        .then(enviar(respuesta))
        .then(bd.terminar)
)

app.delete(
    '/alumno/:alumnoId',
    (peticion, respuesta) =>
        bd.conectar()
        .then(alumno.borrar(peticion.params))
        .then(enviar(respuesta))
        .then(bd.terminar)
)

app.listen(
    3000,
    () =>
        console.log('Eventrozentral escuchando en el puerto 3000...')
)
