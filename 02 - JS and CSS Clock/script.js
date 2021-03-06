const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const hands = document.getElementsByClassName('hand');
const digital = document.querySelector('.clock-digital');


function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;

    if (secondsDegrees == 90) {
        Array.prototype.forEach.call(hands, (item) => item.setAttribute('style', 'transition: none;'));
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    } else if (secondsDegrees == 96) {
        Array.prototype.forEach.call(hands, (item) => item.setAttribute('style', 'transition: all 0.15s;'));
    }
    
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;


    let h = checkTime(hours);
    let m = checkTime(minutes);
    let s = checkTime(seconds);
    digital.innerHTML = h + ":" + m + ":" + s;
}

function checkTime(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}

setInterval(setDate, 1000);

setDate();

