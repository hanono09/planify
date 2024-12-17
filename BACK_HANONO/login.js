//connect2Server()

function buscarusuario() {
    const email = document.getElementById("emailInput").value
    const password = document.getElementById("passwordInput").value
//considere que se podia hacer una validacion del email pero si esta mal escrito no lo va a encontrar entonces es inescesario

    const data = {
        email,
        password 
    }

    console.log(data)

    function userCallback(validarEmail) {
       
        console.log(validarEmail)
    } 
    

    postData("login", data, userCallback)
    console.log("hola")
}
