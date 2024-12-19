// Función de login
function buscarusuario() {
    connect2Server()
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;

    const data = {
        email,
        password
    };
    console.log(data);

    if (validarEmail(email) === false) {
        console.log("entro aca");
        alert("Por favor, ingrese un mail valido");
    }

    if (validarPassword(password) === false) {
        alert("Por favor, ingrese una password valida");
    }

    console.log(validarPassword(password));

    postData("login", data, userCallback);
    console.log("hola");
}

// Callback para el postData
function userCallback() {
    console.log();
}

// Validación de email
function validarEmail(email) {
    console.log(email);
    const regex = /^[^\s@]+@gmail\.com$/i;
    console.log(regex.test(email));
    return regex.test(email);
}

// Validación de contraseña
function validarPassword(password) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.{8,})[A-Za-z\d!@#$%^&*]+$/;
    return regex.test(password);
}

// Función para obtener los últimos planes
function planes() {
    connect2Server()
    postData("flan", (data) => {
        console.log("Últimos 2 planes recibidos desde el backend:", data);
    });
}



