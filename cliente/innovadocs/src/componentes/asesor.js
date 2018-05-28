import { httpGet, httpPost } from "../xmlhttp.js";
import Sesion from "./sesion.js";

class Asesor {

    buscarTodos(pagina) {
        return Sesion.tokenCrudo()
            .then(token =>
                  httpGet(
                      "http://localhost:3002/asesores/" +
                          "?pagina=" + pagina +
                          "&token=" + token,
                      {}
                  ))
            .then(JSON.parse);
    }
}
