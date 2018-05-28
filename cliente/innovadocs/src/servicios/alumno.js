import axios from "axios";
import { prop, merge, objOf } from "ramda";
import { eventozentral } from "./config";

class Alumno {

    static obtener(pagina, token) {
        return axios.get(
            eventozentral + "/alumno/" +
                "?pagina=" + pagina +
                "&token=" + token)
            .then(prop("data"));
    }

    static insertar(alumno, token) {
        return axios.post(
            eventozentral + "/alumno/" + alumno.id,
            merge(alumno, objOf("token", token)))
            .then(prop("data"));
    }

    static editar(alumno, token) {
        return axios.put(
            eventozentral + "/alumno/" + alumno.id,
            merge(alumno, objOf("token", token)))
            .then(prop("data"));
    }

    static eliminar(id, token) {
        return axios.delete(eventozentral + "/alumno/" + id + "/?token=" + token)
            .then(prop("data"));
    }

}

export default Alumno;
