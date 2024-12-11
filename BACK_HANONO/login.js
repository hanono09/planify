function buscarusuario() {
    const login = document.getElementById("user").value
    const data = {
        perfumeInput 
    }

    function parfumCallback(res) {
        alert(res.precio)
    } 

    postData("parfum", data, parfumCallback)
    console.log("hola")
}

connect2Server()