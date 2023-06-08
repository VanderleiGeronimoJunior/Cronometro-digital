const minutesEL = document.querySelector("#minutes");
const secondsEL = document.querySelector("#seconds");
const milisecondsEL = document.querySelector("#miliseconds");
const starBtn = document.querySelector("#starBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const resetBtn = document.querySelector("#resetBtn");
const logTimeBtn = document.querySelector("#logTimeBtn");
const separator = document.querySelector(".separator");

let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let isPaused = false; // começa em pause
let interval;



// temporizador

starBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);
logTimeBtn.addEventListener("click", logTime);

function startTimer(){
    interval = setInterval(() => {
        if(!isPaused){

            miliseconds += 10;

            if(miliseconds === 1000){
                seconds++;
                miliseconds = 0;
            }

            if(seconds === 60){
                minutes++;
                seconds = 0;
            }

            minutesEL.textContent = formatTime(minutes);
            secondsEL.textContent = formatTime(seconds);
            milisecondsEL.textContent = formatMiliseconds(miliseconds);
        }
    },10);

    starBtn.style.display = "none";
    pauseBtn.style.display = "block";
}

function pauseTimer(){
    isPaused = true;
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "block";
}

function resumeTimer(){
    isPaused = false;
    pauseBtn.style.display = "block";
    resumeBtn.style.display = "none";    
}

function resetTimer(){
    clearInterval(interval);
    isPaused = false;
    minutes = 0;
    seconds = 0;
    miliseconds = 0;

    minutesEL.textContent = "00";
    secondsEL.textContent = "00";
    milisecondsEL.textContent = "000";

    starBtn.style.display = "block";
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "none";
}

function formatTime(time){
    return time < 10 ? `0${time}`: time;
};

function formatMiliseconds(time){
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}


function logTime() {
    minutesEL.value;
    secondsEL.value;
    milisecondsEL.value;
    separator.value;

    let lista  = document.getElementById("tempo").innerHTML;
    lista = lista + `
    <p> volta : </p>

    <span>
    ${minutesEL.innerHTML}  ${separator.innerHTML}  ${secondsEL.innerHTML}  ${separator.innerHTML} 
    ${milisecondsEL.innerHTML}
    </span>
    
    `;
    
    document.getElementById("tempo").innerHTML = lista;

}

