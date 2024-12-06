import fs from "fs";
import { onEvent, startServer } from "soquetic";

// Validaciones
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.(gmail\.com)$/i;
    return regex.test(email);
}

function validarPassword(password) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(password);
}

// Gestión de usuarios
function obtenerUsuarios() {
    try {
        return JSON.parse(fs.readFileSync("./usuarios.json", "utf-8"));
    } catch {
        return []; 
    }
}


function guardarUsuarios(usuarios) {
    fs.writeFileSync("./usuarios.json", JSON.stringify(usuarios, null, 2));
}

// Eventos de registro y login
onEvent("signup", (data) => {
    const { nombre, password, email } = data;

    if (!validarEmail(email)) {
        return { 
            success: false, 
            message: "El correo no es válido. Usa un dominio gmail.com" 
        };
    }

    if (!validarPassword(password)) {
        return { 
            success: false, 
            message: "Contraseña inválida. Requiere 8+ caracteres, mayúscula, número y símbolo." 
        };
    }

    const usuarios = obtenerUsuarios();
    const userExists = usuarios.some(usuario => usuario.email === email);

    if (userExists) {
        return { 
            success: false, 
            message: "El correo ya está registrado." 
        };
    }

    const newUser = { nombre, password, email };
    usuarios.push(newUser);
    guardarUsuarios(usuarios);

    return { 
        success: true, 
        message: "Usuario registrado correctamente." 
    };
});

function loginCallback(data) {
    const data = fs.readfileSync("usuarios.json", "utf8")
}
onEvent("login", loginCallback)

// Iniciar servidor
startServer();  