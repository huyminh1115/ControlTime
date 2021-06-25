CurrentTime = 0;
condition = 1;
difference = 3;

if(localStorage.length <2 ){
    localStorage.setItem("CurrentTime", CurrentTime.toString());
    localStorage.setItem("difference", difference.toString());
}else{
    CurrentTime = parseInt(localStorage.getItem("CurrentTime"), 10);
    difference = parseInt(localStorage.getItem("difference"), 10);
}

(function () {
    const second = 1,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
    setInterval(function() {
        if(condition == 1){
            CurrentTime = CurrentTime + 1/difference;
        }else if(condition == 2){
            CurrentTime = CurrentTime - 1 ;
        }else if(condition == 3){
            CurrentTime = CurrentTime;
        }else{
            condition = 1;
        }
        
        if(CurrentTime < 0){
            _CurrentTime = -CurrentTime;
            document.getElementById("days").innerText = -Math.floor(_CurrentTime / (day)),
            document.getElementById("hours").innerText = -Math.floor((_CurrentTime % (day)) / (hour)),
            document.getElementById("minutes").innerText = -Math.floor((_CurrentTime % (hour)) / (minute)),
            document.getElementById("seconds").innerText = -Math.floor((_CurrentTime % (minute)) / second);
        }
        else{
            _CurrentTime = CurrentTime;
            document.getElementById("days").innerText = Math.floor(_CurrentTime / (day)),
            document.getElementById("hours").innerText = Math.floor((_CurrentTime % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((_CurrentTime % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((_CurrentTime % (minute)) / second);
        }
        localStorage.setItem("CurrentTime", CurrentTime.toString());
    }, 1000)
}());

function Study(){
    condition = 1;
}

function Play(){
    condition = 2;
}

function Pause(){
    condition = 3;
}

function setDifference(){
    condition = false;
}