    
/* Funciones definidas dentro de signupback por alguna razon no terminan de ser encontradas
en los otros archivos .js dentro de la misma carpeta. Al intentar importar las funciones manualmente 
a este archivo, causa que el boton no encuentre la funcion cambiarpassword para el evento onclick. Pero, si
quitamos el import, no pasa nada y lo encuentra sin problema.*/

window.cambiarpassword = cambiarpassword;

export function cambiarpassword() {
    const newpassword = document.getElementById("changepassword").value
    console.log("aca")
        
    if (validarPassword(Password) === false)
        return 
    const data = {
        newpassword
    }
    console.log(change)
    postData("password", data)
}
