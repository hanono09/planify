import fs from "fs";

let users = JSON.parse(fs.readFileSync("./data/usuarios.json", "utf-8"));

// Guardar inf usuario

var usuario = {
    nombre: "[]",
    password: "[]",
    email: "[]",
 };


 onEvent("login", (data) => {
    var user = {
        password: data.password,
        email: data.email,
     }
   
   let usuarios = JSON.parse(fs.readFileSync("./data/usuarios.json", "utf-8"));
   for (let i = 0; i < 100; i++){
    if (lista[i] == "Wally"){   

    });
