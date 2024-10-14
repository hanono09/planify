const loginform = document.querySelector('#loginnform')
function nombrecito() {
    {}
}
let boton = document.get

boton.addEventListener("onclick", nombrecito)
addEventListener('submit', (e)=>{
    e.preventDefault()

    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const users = JSON.parse(localStorage.getItem('#users')) || []
    const validUser = Users.find(users => users.email === email && users.password === password)
    if(!validUser){
        return alert('usuario y/o contraseña incorrectos!')
    }
    alert('Bienvenido')
    localStorage.setItem('login_success', JSON.stringify(validUser))
    window.location.href = 'index.html'

})