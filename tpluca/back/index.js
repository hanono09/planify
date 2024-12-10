import { onEvent, sendEvent, startServer } from "soquetic";
import fs from "fs"

onEvent("parfum", (data) => {
    const { perfumeInput } = data;
    const perfumes = JSON.parse(fs.readFileSync("./perfumes.json", "utf-8"))
    console.log(perfumes, perfumeInput)
    for (let i = 0; i < perfumes.length; i++) {
        if (perfumes[i].nombre == perfumeInput) {
            console.log("hey")
            return {
                status: 200, 
                precio: perfumeInput[i].precio
            }
        }
    }
    return {
        status: 400,
        msg: "No se encontro tu perfume"
    }
})

startServer()