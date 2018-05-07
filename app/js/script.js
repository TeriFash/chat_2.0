const formInput = document.getElementById('formInput');
const form = document.getElementById('form');
const message = document.getElementById('message');
const status = document.getElementById('status');

const ws = new WebSocket('wss://localhost:8080');

function statusVal (value) {
    status.innerHTML = value;
}
function sendMessage  (value) {
    const item = document.createElement('div');
    item.innerHTML = value;
    message.appendChild(item);
}
formInput.addEventListener('submit', event => {
    event.preventDefault();
    ws.send( formInput.value );
    formInput.value = '';
});

ws.onopen = () => statusVal('Connected');
ws.onclose = () => statusVal('No Connect');
ws.onmessage = response => sendMessage(response.data);

