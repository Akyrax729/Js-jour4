const cd = document.getElementById('countdown');
let dcount = 5

function count()
{
    if (dcount > 0) {
        cd.textContent = dcount
        dcount -= 1
    }else {
        cd.textContent = "Go !"
    }
}
 
setInterval(count, 1000);
 


