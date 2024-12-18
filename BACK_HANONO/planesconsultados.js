import fs from "fs"

// Función para obtener los últimos 2 planes
export function obtenerUltimosPlanes() {
    fs.readFile("./planesConsultados.json", "utf-8", (err, data) => {
        if (err) {
            console.error('Error al leer los planes:', err);
            return;
        }

        // Parsear los datos JSON
        let planesConsultados = JSON.parse(data);

        // Obtener los últimos 2 planes 
        const ultimos2Planes = planesConsultados.slice(2);

        // Mostrar los últimos 2 planes
        console.log('Últimos 2 planes consultados:', ultimos2Planes);

        postData ("planes", data)

    });
}

// Llamada para obtener los últimos 2 planes
