import fs from "fs";

import readlineSync from "readline-sync";

// Cargar archivos
let planfavorito = JSON.parse(fs.readFileSync("favoritos.json", "utf-8"));


let PlanesElegidos = [];
console.log("Estos son nuestros planes:");
for (let i = 0; i < planes.length; i++) {
  console.log(`${i + 1}) ${planes[i]}`);

// Guardar pedido

var planfav = {
    "planfav": planfav,
  };
  
  let planfavorito = JSON.parse(fs.readFileSync("./data/favoritos.json", "utf-8"));
  planfavorito.push(plan);
  fs.writeFileSync("../favorito/favoritos.json", JSON.stringify(planfavorito));

  };
  