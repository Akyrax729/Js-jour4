const coucou = document.getElementById('welcome')

function wmsg() {
    let msg = document.createElement('p')
    msg.innerHTML = "Coucou, ça va ?"
    coucou.appendChild(msg)
}

let interval = setInterval(wmsg, 2000);

setTimeout (function () {
    clearInterval(interval);

}, 2005)
