// Conexión al servidor
connect2Server();

// Elementos del DOM
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const mensajeRespuesta = document.getElementById('mensajeRespuesta');

// Validación de email
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.(gmail\.com)$/i;
    return regex.test(email);
}

// Validación de contraseña
function validarPassword(password) {
    // Al menos 8 caracteres, una mayúscula, un número y un carácter especial
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(password);
}

// Validaciones locales antes de enviar
function validarFormulario(email, password) {
    if (!email) {
        mostrarMensaje('Por favor, ingresa un correo electrónico', 'red');
        return false;
    }

    if (!validarEmail(email)) {
        mostrarMensaje('Por favor, usa un correo de Gmail válido', 'red');
        return false;
    }

    if (!password) {
        mostrarMensaje('Por favor, ingresa una contraseña', 'red');
        return false;
    }

    if (!validarPassword(password)) {
        mostrarMensaje('La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial', 'red');
        return false;
    }

    return true;
}

// Función para mostrar mensajes
function mostrarMensaje(mensaje, color = 'black') {
    mensajeRespuesta.textContent = mensaje;
    mensajeRespuesta.style.color = color;
}

// Manejar envío del formulario
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Obtener valores
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    // Validar formulario
    if (!validarFormulario(email, password)) {
        return;
    }

    // Enviar datos al backend
    postData('login', { email, password }, (response) => {
        if (response.success) {
            // Login exitoso
            mostrarMensaje('Inicio de sesión exitoso', 'green');
            
            // Opcional: redirigir o guardar información del usuario
            // localStorage.setItem('usuario', JSON.stringify(response.usuario));
            // window.location.href = '/dashboard.html';
        } else {
            // Login fallido
            mostrarMensaje(response.message || 'Error en el inicio de sesión', 'red');
        }

        // Limpiar campo de contraseña
        passwordInput.value = '';
    });
});

// Limpiar mensaje de error al empezar a escribir
emailInput.addEventListener('input', () => mostrarMensaje(''));
passwordInput.addEventListener('input', () => mostrarMensaje(''));