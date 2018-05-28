const express = require("express");
const router = express.Router();
const {
    crear,
    buscar,
    buscarTodos,
    modificar,
    eliminar
} = require("../modelos/asesor.js");
const { ejecutar } = require("../modelos/autorizador.js");
const privilegios = require("./privilegios.json");

router.get("/:id", ejecutar(buscar, privilegios.lectura));
router.get("/", ejecutar(buscarTodos, privilegios.lectura));
router.post("/:id", ejecutar(crear, privilegios.escritura));
router.put("/:id", ejecutar(modificar, privilegios.escritura));
router.delete("/:id", ejecutar(eliminar, privilegios.escritura));

module.exports = router;
