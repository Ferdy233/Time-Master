class Clock {
    constructor() {
        this.updateTheTime();
    }

    updateTheTime() {
        const now = new Date();
        this.hours = now.getHours();
        this.minutes = now.getMinutes();
        this.seconds = now.getSeconds();
    }

    getFormattedTime(format24 = true) {
        let hours = this.hours;
        let ampm = '';

        if (!format24) {
            ampm = hours >= 12 ? ' PM' : ' AM';
            hours = hours % 12 || 12; // Convert to 12-hour format
        }

        const minutes = String(this.minutes).padStart(2, '0');
        const seconds = String(this.seconds).padStart(2, '0');

        return `${hours}:${minutes}:${seconds}${ampm}`;
    }
}

// Alarm variables
let alarmSet = false;
let alarmHour, alarmMinute;

// Event listener for alarm time input
document.getElementById('alarmTime').addEventListener('change', function () {
    const [hour, minute] = this.value.split(':');
    alarmHour = parseInt(hour, 10);
    alarmMinute = parseInt(minute, 10);
    alarmSet = true;
    alert(`Alarm set for ${hour}:${minute}`);
});

// Function to check and trigger alarm
function checkAlarm(clock) {
    if (alarmSet && clock.hours === alarmHour && clock.minutes === alarmMinute) {
        alert('⏰ Alarm ringing!');
        alarmSet = false; // Reset alarm
    }
}

// Function to update the clock display
function updateClockDisplay() {
    const clock = new Clock();
    const formatOption = document.getElementById('formatOption').value;
    const format24 = formatOption === '24';

    document.getElementById('clockDisplay').innerText = clock.getFormattedTime(format24);
    checkAlarm(clock);
}

// Update clock every second
setInterval(updateClockDisplay, 1000);
