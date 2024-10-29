const cligno = document.getElementById('blink')

let dcount = 1

function count()
{
    if (dcount > 0) {
        cligno.textContent = ""
        dcount -= 1
    }else {
        cligno.textContent = "Go !"
        dcount +=1
    }
}
 
setInterval(count, 5000);