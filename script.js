
const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minute = document.getElementById('minutes');

const targetDate = new Date ("February 12 2025 04:38").getTime();

function timer () {
    const currentDate = new Date().getTime();
    const difference = targetDate - currentDate;

    const days = Math.floor(distance / 1000 / 60 / 60 / 24);
    const hours = Math.floor(distance / 1000 / 60 / 60 % 24);
    const minutes = Math.floor(distance / 1000 / 60 % 60);

    Days.innerHTML = days;
    Hours.innerHTML = hours;
    minutes.innerHTML = minutes;
}