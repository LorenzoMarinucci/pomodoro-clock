let time = {
            minutes: 25,
            seconds: 0,
            work: 25,
            rest: 5,
            workUp: function(element) {if (this.work<50) {
                this.work++;
                workTime.textContent = this.work;
                pushEfect(element);
                if (!time.active && time.status=="work") {
                    time.seconds = 0;
                    time.minutes = time.work;
                    updateTimer();
                }
             }
            },
            workDown: function(element) {if (this.work>1) {
                this.work--;
                workTime.textContent = this.work;
                pushEfect(element);
                if (!time.active && time.status=="work") {
                    time.seconds = 0;
                    time.minutes = time.work;
                    updateTimer();
                }
             }
            },
            restUp: function(element) {if (this.rest<50) {
                this.rest++;
                restTime.textContent = this.rest;
                pushEfect(element);
                if (!time.active && time.status=="rest") {
                    time.seconds=0;
                    time.minutes=time.rest;
                    updateTimer();
                }
             }
            },
            restDown: function(element) {if (this.rest>1) {
                                            this.rest--;
                                            restTime.textContent = this.rest;
                                            pushEfect(element);
                                            if (!time.active && time.status=="rest") {
                                                time.seconds=0;
                                                time.minutes=time.rest;
                                                updateTimer();
                                            }
                                         }
                                    },                        
            active: false,  //si el timer se esta ejecutando.
            status: "work"
}
const arrows = document.querySelectorAll("i");  //aumentar o disminuir los minutos.
      buttons = document.querySelectorAll(".button"); //configuracion del timer.
      status = document.getElementById("status"); 
      timer = document.getElementById("timer");
      workTime = document.getElementById("workTime");
      restTime = document.getElementById("restTime");

setInterval(count, 1000); 

function pushEfect(element) {
    element.toggleAttribute("pushed");
    setTimeout(() => {element.toggleAttribute("pushed")}, 300);
}

function count() {  
    if (time.active) {
        if (time.seconds==0) {
            time.seconds=59;
            if (time.minutes==0) 
                changeStatus();
            
            else 
                time.minutes=+time.minutes-1;
        }
        else 
            time.seconds=+time.seconds-1;
        updateTimer();
    }
}



function updateTimer() { //para que siempre marque como xx:xx
    currentTimer = "";
    currentTimer += (time.minutes>=10) ? time.minutes : ("0"+time.minutes);
    currentTimer += ":";
    currentTimer += (time.seconds>=10) ? time.seconds : ("0"+time.seconds);
    timer.textContent = currentTimer;
}

function changeStatus() {

}

arrows.forEach(arrow => arrow.addEventListener('click', e => {time[e.target.id](document.getElementById(e.target.id))}));
buttons.forEach(button => button.addEventListener('click', e => configureTime(e)));

function configureTime(e) {
    console.log(e.target.id);
    switch (e.target.id) {
        case ("play"): {
            time.active=!time.active;
            document.getElementById(e.target.id).toggleAttribute('paused');
            break;
        }
        case ("reset"): {
            time.seconds = 0;
            time.minutes = (time.status=="work") ? time.work : time.minutes;
            updateTimer();
            break;
        }
        case ("stop"): {
            if (time.active) {
                time.active = false;
                document.getElementById("play").toggleAttribute('paused');
            }
            time.seconds = 0;
            time.minutes = time.work;
            if (time.status=="rest") {
                time.status = "work";
                status.textContent = "WORK";
            }
            updateTimer();
        }
    }
}