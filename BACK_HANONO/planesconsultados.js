const http = require('http');
const fs = require('fs');
const { Server } = require('socket.io');

// Crear el servidor HTTP
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Servidor Socket.IO en funcionamiento');
});

// Inicializar Socket.IO
const io = new Server(server);

// Función para obtener los últimos 10 planes
function obtenerUltimosPlanes(callback) {
    fs.readFile('./planesConsultados.json', 'utf-8', (err, data) => {
        if (err) {
            console.error('Error al leer los planes:', err);
            callback({ error: 'Error al leer los planes' });
            return;
        }

        // Parsear los datos JSON
        let planesConsultados = JSON.parse(data);

        // Obtener los últimos 10 planes
        const ultimos10Planes = planesConsultados.slice(-10);

        // Llamar al callback con los datos
        callback({ planes: ultimos10Planes });
    });
}

// Configuración de eventos Socket.IO
io.on('connection', (socket) => {
    console.log('Cliente conectado');

    // Escuchar el evento para obtener planes
    socket.on('obtenerUltimosPlanes', () => {
        obtenerUltimosPlanes
