// Cronômetro
const minutesEL = document.querySelector("#minutes");
const secondsEL = document.querySelector("#seconds");
const milisecondsEL = document.querySelector("#miliseconds");
const separator = document.querySelector(".separator");

// botões
const starBtn = document.querySelector("#starBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const continueBtn = document.querySelector("#continueBtn");
const resetBtn = document.querySelector("#resetBtn");
const lapBtn = document.querySelector("#lapBtn");

// lista
const tempo = document.querySelector("#tempo");

tempo.style.display = "none";
continueBtn.style.display = "none";

let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let isPaused = false; // começa em pause
let interval;
let counter = 1;


// temporizador

starBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
continueBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);
lapBtn.addEventListener("click", logTime,);




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
            milisecondsEL.textContent = formatTime(miliseconds);

            
        }
    },10);

    starBtn.style.display = "none";
    pauseBtn.style.display = "block";
    continueBtn.style.display = "none";
}

function pauseTimer(){
    isPaused = true;
    pauseBtn.style.display = "none";
    continueBtn.style.display = "block";
}

function resumeTimer(){
    isPaused = false;
    continueBtn.style.display = "none";
    pauseBtn.style.display = "block";
}

function resetTimer(){
    clearInterval(interval);
    isPaused = false;
    minutes = 0;
    seconds = 0;
    miliseconds = 0;
    counter = 1;

    minutesEL.textContent = "00";
    secondsEL.textContent = "00";
    milisecondsEL.textContent = "000";
    tempo.innerHTML = "";

    starBtn.style.display = "block";
    pauseBtn.style.display = "none";
    continueBtn.style.display = "none";
    tempo.style.display = "none";
}

function formatTime(time){
    return time < 10 ? `0${time}`: time;
};


function formatMiliseconds(time){
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}





function logTime() {

    tempo.style.display = "block";


    let lista  = document.getElementById("tempo").innerHTML;
    lista += `<li class = "volta">
    <p id = "clicou" >Volta ${counter++} :</p>


    


    <span>
    ${minutesEL.innerHTML}  ${separator.innerHTML}  ${secondsEL.innerHTML}  ${separator.innerHTML} 
    ${milisecondsEL.innerHTML}
    </span>
    
    </li>
    <hr>
    
    <br>`;
    
    tempo.innerHTML = lista;

    const volta = document.querySelectorAll(".volta");
    volta.forEach( volta => {
        volta.style.display = "flex";
        volta.style.justifyContent = "space-between";    
        volta.style.alignItems = "center";
        volta.style.padding = "1rem 1rem";
    });
    
    clearTimer();

    startTimer();

}

function clearTimer(){
    clearInterval(interval);
    isPaused = false;
    minutes = 0;
    seconds = 0;
    miliseconds = 0;
}

