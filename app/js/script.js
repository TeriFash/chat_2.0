const status = document.getElementById('status');
const message = document.getElementById('message');
const form = document.getElementById('form');
const formInput = document.getElementById('formInput');

const ws = new WebSocket('ws://localhost:8080');

function statusVal (value) {
    status.classList.add(value);
}
function printMessage  (value) {
    const item = document.createElement('div');
    item.innerHTML = value;
    message.appendChild(item);
}

form.addEventListener('submit', event => {
    event.preventDefault();
ws.send( formInput.value );
formInput.value = '';
});

ws.onopen = () => statusVal('online');
ws.onclose = () => statusVal('offline');
ws.onmessage = response => printMessage(response.data);
