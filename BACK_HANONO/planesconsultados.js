import fs from "fs"
import { onEvent, sendEvent, startServer } from "soquetic";

// Función para obtener los últimos 2 planes

function obtenerUltimosPlanes() {
    fs.readFile("./BACK_HANONO/planesConsultados.json", "utf-8", (err, data) => {
        if (err) {
            console.error('Error al leer los planes:', err);
            return;
        }

        // Parsear los datos JSON
        let planesConsultados = JSON.parse(data);

        // Obtener los últimos 2 planes 
        const ultimos2Planes = planesConsultados.slice(-2);

        // Mostrar los últimos 2 planes
        console.log('Últimos 2 planes consultados:', ultimos2Planes);

    });
}

onEvent("flan", obtenerUltimosPlanes);  // Envía el resultado al frontend bajo el evento "flan"

obtenerUltimosPlanes();

startServer()


