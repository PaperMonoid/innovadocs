const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const asesor = require("./puntos_finales/asesor.js");

app.use("/asesor", asesor);
app.listen(
    3002,
    () =>
        console.log('Eventozentral escuchando en el puerto 3002...')
)
