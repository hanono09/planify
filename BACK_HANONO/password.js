conect2server()

function cambiarpassword() {
    const newpassword = document.getElementById("changepassword").value

    const data = {
        newpassword
    }
    console.log(change)
    postData ("password", data)
}