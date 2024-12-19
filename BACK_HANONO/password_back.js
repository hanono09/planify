import fs from "fs";
import { onEvent } from "soquetic";

onEvent("password", (data) => {
    const { email, newpassword } = data; // Desestructuramos email y la nueva contraseña

    // Leer y parsear el archivo JSON
    let usuarios = JSON.parse(fs.readFileSync("usuarios.JSON", "utf-8"));

    // Buscar el usuario por email y actualizar la contraseña
    let usuarioEncontrado = false;
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email === email) {
            usuarios[i].password = newpassword; // Actualizar la contraseña
            usuarioEncontrado = true;
            break;
        }
    }

    // Si no se encuentra el usuario, registramos un mensaje de error
    if (!usuarioEncontrado) {
        console.error(`Usuario con email ${email} no encontrado.`);
        return;
    }

    // Guardar los cambios en el archivo JSON
    fs.writeFileSync("usuarios.JSON", JSON.stringify(usuarios, null, 2), "utf-8");
    console.log(`Contraseña actualizada para el usuario con email: ${email}`);
});
