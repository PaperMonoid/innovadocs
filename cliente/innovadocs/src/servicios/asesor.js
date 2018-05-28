import axios from "axios";
import { prop, merge, objOf } from "ramda";
import { eventozentral } from "./config";

class Asesor {

    static obtener(pagina, token) {
        return axios.get(
            eventozentral + "/asesor/" +
                "?pagina=" + pagina +
                "&token=" + token)
            .then(prop("data"));
    }

    static insertar(asesor, token) {
        return axios.post(
            eventozentral + "/asesor/" + asesor.id,
            merge(asesor, objOf("token", token)))
            .then(prop("data"));
    }

    static editar(asesor, token) {
        return axios.put(
            eventozentral + "/asesor/" + asesor.id,
            merge(asesor, objOf("token", token)))
            .then(prop("data"));
    }

    static eliminar(id, token) {
        return axios.delete(eventozentral + "/asesor/" + id + "/?token=" + token)
            .then(prop("data"));
    }

}

export default Asesor;
