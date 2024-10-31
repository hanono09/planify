

const loginForm = document.querySelector('#loginnform')

function nombrecito() {
}

// Obtener el formulario
let form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    // Obtener valores del formulario
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const ciudad = document.querySelector('#ciudad').value

    postData("login", {
        password: password,
        email: email});
})

