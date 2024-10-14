const signupform = document.querySelector("#signupform")
signupform.addEventListener('submit', (e)=>{
e.preventDefault()
const name = document.querySelector('#name').value
const email = document.querySelector('#email').value
const password = document.querySelector('#password').value

const users = JSON.parse(localStorage.getItem('users')) || []
const isUserRegistred = Users.find (users => user.email === email)
if(isUserRegistred){
    return alert('El usuario ya esta registrado!')
}

Users.push({name: name, email: email, password: password})
localStorage.setItem('users', JSON.stringify(users))
alert('Registro Exitoso!')
window.location.href = 'login.html'
})  