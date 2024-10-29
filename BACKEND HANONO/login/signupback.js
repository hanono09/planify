import fs from "fs";


// Guardar inf usuario



var usuario = {
    nombre: "[]",
    password: "[]",
    email: "[]",
 };


 let usuario = JSON.parse(fs.readFileSync("./data/usuarios.json", "utf-8"));
 usuario.push(usuario);
 fs.writeFileSync("usuarios.json", JSON.stringify(usuario));


 onEvent("date", () => {
    var usuario = {
        nombre: "[]",
        password: "[]",
        email: "[]",
     };