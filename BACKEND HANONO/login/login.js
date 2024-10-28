

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

    // Obtener los usuarios almacenados en localStorage
    const users = JSON.parse(localStorage.getItem('users')) || []

    // Verificar si el usuario existe y la contraseña es correcta
    const validUser = users.find(user => user.email === email && user.password === password)
    if (!validUser) {
        return alert('Usuario y/o contraseña incorrectos!')
    }

    // Almacenar el login exitoso en localStorage
    localStorage.setItem('login_success', JSON.stringify(validUser))

})

