let currentTime = {
            minutes: 25,
            seconds: 0
    }
    active = true;  //si el timer se esta ejecutando.
    currentStatus = "work"; 
const arrows = document.querySelectorAll("i");  //aumentar o disminuir los minutos.
      buttons = document.querySelectorAll("img"); //configuracion del timer.
      status = document.getElementById("status"); 
      timer = document.getElementById("timer");

setInterval(count, 1000); 

function count() {  //cuando es menor a 10, se trabaja como string para añadir el primer 0.
    if (active) {
        if (currentTime.seconds==0) {
            currentTime.seconds=59;
            if (currentTime.minutes==0) {
                changeStatus();
            }
            else {
                currentTime.minutes=+currentTime.minutes-1;
                if (currentTime.minute<10)
                    currentTime.minutes= "0" + currentTime.minutes;
            }
        }
        else {
            currentTime.seconds=+currentTime.seconds-1;
            if (currentTime.seconds<10)
                currentTime.seconds= "0" + currentTime.seconds;
        }
        timer.textContent=`${currentTime.minutes}:${currentTime.seconds}`;
    }
}

function changeStatus() {

}