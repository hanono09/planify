import fs from "fs";

// Validar email
//regex se usa para validar si un correo electrónico tiene un formato válido según los criterios establecidos.
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.(gmail\.com|outlook\.com|yahoo\.com|hotmail\.com)$/i;
    return regex.test(email);
}

// Validar contraseña
function validarPassword(password) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(password);
}

function obtenerUsuarios() {
    try {
        return JSON.parse(fs.readFileSync("./usuarios.json", "utf-8"));
    } catch {
        return []; // Si el archivo no existe o está vacío
    }
}

function guardarUsuarios(usuarios) {
    fs.writeFileSync("./usuarios.json", JSON.stringify(usuarios, null, 2));
}
// Guardar usuario
onEvent("signup", (data) => {
    const { nombre, password, email } = data;
//! en JavaScript se utiliza para negar una condición. Invierte el valor de verdad
    if (!validarEmail(email)) {
        console.log("El correo no es válido. Asegúrate de usar un correo con un dominio válido.");
        return;
    }

    if (!validarPassword(password)) {
        console.log("La contraseña no cumple con los requisitos. Debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial.");
        return;
    }

    const usuarios = obtenerUsuarios();
    const userExists = usuarios.some(usuario => usuario.email === email);

    if (userExists) {
        console.log("El correo ya está registrado.");
        return;
    }

    const newUser = { nombre, password, email };
    usuarios.push(newUser);
    guardarUsuarios(usuarios);

    console.log("Usuario registrado correctamente.");
});

// Cambiar contraseña
onEvent("cambiarPassword", (data) => {
    const { email, nuevaPassword } = data;

    if (!validarPassword(nuevaPassword)) {
        console.log("La nueva contraseña no cumple con los requisitos.");
        return;
    }

    const usuarios = obtenerUsuarios();
    const usuarioIndex = usuarios.findIndex(usuario => usuario.email === email);

    if (usuarioIndex === -1) {
        console.log("Correo no encontrado.");
        return;
    }

    usuarios[usuarioIndex].password = nuevaPassword;
    guardarUsuarios(usuarios);

    console.log("Contraseña actualizada correctamente.");
});
