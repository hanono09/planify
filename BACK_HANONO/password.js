    

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
