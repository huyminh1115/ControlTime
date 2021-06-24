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
    let distance = 10;
    setInterval(function() {
        distance--;
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