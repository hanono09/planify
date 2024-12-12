connect2Server()

function buscarusuario() {
    const email = document.getElementById("emailInput").value
    const password = document.getElementById("passwordInput").value

    const data = {
        email,
        password 
    }

    console.log(data)

    function userCallback(res) {
        alert(res)
        console.log(res)
    } 

    postData("login", data, usercallback)
    console.log("hola")
}

connect2Server()