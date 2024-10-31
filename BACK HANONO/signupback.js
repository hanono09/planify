import fs from "fs";


// Guardar inf usuario



var usuario = {
    nombre: "[]",
    password: "[]",
    email: "[]",
 };



 onEvent("signup", (data) => {
    var user = {
        nombre: data.nombre,
        password: data.password,
        email: data.email,
     }
   
   let usuario = JSON.parse(fs.readFileSync("./data/usuarios.json", "utf-8"));
   usuario.push(user);
   fs.writeFileSync("usuarios.json", JSON.stringify(usuario));
   });

   