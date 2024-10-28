import fs from "fs";

let users = JSON.parse(fs.readFileSync("./data/usuarios.json", "utf-8"));

// Guardar inf usuario

var usuario = {
    nombre: "[]",
    password: "[]",
    email: "[]",
 };

 let usuario = JSON.parse(fs.readFileSync("./data/usuarios.json", "utf-8"));

  