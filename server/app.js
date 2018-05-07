const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

let clients = [];

wss.on('connection', function connection(ws) {

   ws.send('Привет мир');
  clients.push(ws);
  ws.on('message', data => {
    clients.forEach(client => {
      client.send(data);
    });
  });
});
