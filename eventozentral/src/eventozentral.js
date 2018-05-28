const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const router = express.Router();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const asesor = require("./puntos_finales/asesor.js");
const alumno = require("./puntos_finales/alumno.js");

app.use("/asesor", asesor);
app.use("/alumno", alumno);
app.listen(
    3002,
    () =>
        console.log('Eventozentral escuchando en el puerto 3002...')
)
