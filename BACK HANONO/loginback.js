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
   let usuarioEncontrado = null;
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email === user.email) { 
            usuarioEncontrado = usuarios[i];
            break;
         }
      }
  
      // Verifica si se encontró el usuario y si la contraseña coincide
      if (usuarioEncontrado && usuarioEncontrado.password === user.password) {
          console.log("Inicio de sesión exitoso");
      } else {
          console.log("Usuario o contraseña incorrectos");
      }
  });