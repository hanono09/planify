function mandarPerfume() {
    const perfumeInput = document.getElementById("perfume").value
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