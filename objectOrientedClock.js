class Clock {
    constructor(hours,minutes,seconds){
    const now = new Date();
    this.hours = now.getHours();
    this.minutes = now.getMinutes();
    this.seconds = now.getSeconds();
}
}

const clockHours = new Clock();
const clockMinutes = new Clock();
const clockSeconds = new Clock();

console.log(clockHours.hours);
console.log(clockMinutes.minutes); 
console.log(clockSeconds.seconds);
