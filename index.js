distance = 0;
dk = true;
number = 3;
(function () {
    const second = 1,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
    // let birthday = Data.date;
    // fetch("index.json").then(function(resp){
    //     return resp.json();
    // }).then(function(data){
    //     console.log(data);
    //     birthday = data.date;
    //     console.log(birthday);
    // });
    setInterval(function() {
        if(dk == true){
            distance = distance + 1/number;
        }else{
            distance = distance - 1 ;
        }
        if(distance < 0){
            _distance = -distance;
            document.getElementById("days").innerText = -Math.floor(_distance / (day)),
            document.getElementById("hours").innerText = -Math.floor((_distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = -Math.floor((_distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = -Math.floor((_distance % (minute)) / second);
        }
        else{
            _distance = distance;
            document.getElementById("days").innerText = Math.floor(_distance / (day)),
            document.getElementById("hours").innerText = Math.floor((_distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((_distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((_distance % (minute)) / second);
        }
    }, 1000)
}());

function change1(){
    dk = true;
    console.log(dk);
}

function change2(){
    dk = false;
    console.log(dk);
}