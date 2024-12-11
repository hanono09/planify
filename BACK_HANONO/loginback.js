import fs from "fs";
import {startServer, onEvent} from "soquetic"

    onEvent("login", (data) => {

        const { usuario } = (data);
        const usuarios = JSON.parse(fs.readFileSync("./usuarios.JSON", "utf-8"))
        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].dni == login) {
                console.log("hey")
                return {
                    status: 200, 
                    usuario: login[i].email
                }
            }
        }
        return {
            status: 400,
            msg: "No se encontro tu perfume"
        }
    })
    startServer()
