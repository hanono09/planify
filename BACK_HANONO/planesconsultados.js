const fs = require('fs');

// Función para obtener los últimos 10 planes
function obtenerUltimosPlanes() {
    fs.readFile('./planesConsultados.json', 'utf-8', (err, data) => {
        if (err) {
            console.error('Error al leer los planes:', err);
            return;
        }

        // Parsear los datos JSON
        let planesConsultados = JSON.parse(data);

        // Obtener los últimos 10 planes 
        const ultimos10Planes = planesConsultados.slice(-10);

        // Mostrar los últimos 10 planes
        console.log('Últimos 10 planes consultados:', ultimos10Planes);
    });
}

// Llamada para obtener los últimos 10 planes
obtenerUltimosPlanes();
