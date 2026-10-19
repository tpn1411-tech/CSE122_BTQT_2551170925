function showNumber(id1, id2, number) {
    let tens = Math.floor(number / 10);
    let units = number % 10;

    document.getElementById(id1).src =
        "image/0" + tens + ".gif";

    document.getElementById(id2).src = "image/0" + units + ".gif";
}

function updateClock() {
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    showNumber("hour1", "hour2", hours);
    showNumber("minute1", "minute2", minutes);
    showNumber("second1", "second2", seconds);

    let greeting = "";

    if (hours < 12) {
        greeting = "Chào buổi sáng!";
    } else if (hours < 18) {
        greeting = "Chào buổi chiều!";
    } else {
        greeting = "Chào buổi tối!";
    }

    document.getElementById("greeting").textContent = greeting;
}

updateClock();
setInterval(updateClock, 1000);