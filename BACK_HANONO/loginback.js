import fs from "fs";
import {startServer, onEvent} from "soquetic"

    onEvent("login", (data) => {

        const { usuario } = (data);
        const usuarios = JSON.parse(fs.readFileSync("./usuarios.JSON", "utf-8"))
        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].dni == login) {
                console.log("hola")
                return {
                    status: 200, 
                    exito: true
                }
            }
        }
        return {
            status: 400,
            msg: "No se encontro tu usuario"
        }
    })
    startServer()
