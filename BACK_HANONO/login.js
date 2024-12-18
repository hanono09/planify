import {obtenerUltimosPlanes} from "./planesconsultados.js"

connect2Server()

function buscarusuario() {
    const email = document.getElementById("emailInput").value
    const password = document.getElementById("passwordInput").value

    const data = {
        email,
        password 
    }

    if(validarEmail(email) === false){
        console.log("entro aca")
        alert("Por favor, ingrese un  mail valido");
    }
    
    if (validarPassword(password) === false){
        alert("Por favor, ingrese una password valida")
    }
    
    console.log(validarPassword(password))

    postData("login", data, userCallback)
    console.log("hola")
}

function userCallback() {
       
    console.log()
} 

function validarEmail(email) {
    console.log(email)
    const regex = /^[^\s@]+@gmail\.com$/i;
    console.log(regex.test(email));
    return regex.test(email);
}

function validarPassword(password) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.{8,})[A-Za-z\d!@#$%^&*]+$/;
    return regex.test(password);
}

function planes(){
    obtenerUltimosPlanes();
}