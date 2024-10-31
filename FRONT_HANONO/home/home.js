import fs from 'fs';

function Agregarafavoritos(){
    let nombre = document.getElementById("favoritos1").value
    let favoritos = JSON.parse(localStorage.getItem("favoritos"))
    favoritos.push(nombre)
    fs.writeFileSync("favoritos.json", JSON.stringify(favoritos));
    localStorage.setItem("favoritos", JSON.stringify(favoritos))
}

favoritos = []
localStorage.setItem("favoritos", JSON.stringify(favoritos))

let button = document.getElementById("favoritos") 

button.addEventListener("click", Agregarafavoritos)

// JSON.stringify(lo que quieras pasar a string)
// JSON.parse(lo que quieras volver de string)