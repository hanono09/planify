import fs from "fs"
import readlineSync from "readline-sync";

onEvent("password", (data) => {
const {newpassword} = data
let cambiarpassword = JSON.parse(fs.readFileSync("usuarios.JSON", "utf-8"))
for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].email == email) {
        
    }
}  
})