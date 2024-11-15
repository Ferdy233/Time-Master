class Clock {
    constructor() {
        // Get the current time when the Clock object is created
        const now = new Date();
        this.hours = now.getHours();
        this.minutes = now.getMinutes();
        this.seconds = now.getSeconds();
    }

    getTheFormattedTime() {
        // Format the time as HH:MM:SS
        return `${this.hours}:${this.minutes}:${this.seconds}`;
    }

    getThe12HourTime() {
        // Convert the time to 12-hour format and add AM or PM indicator
        let hours12 = this.hours % 12 || 12; // Handle 12 AM case
        let ampm = this.hours >= 12 ? 'PM' : 'AM';
        return ` ${ampm}`;
    }
}

// Create a new Clock object
const myClock = new Clock();

// Print the formatted time and AM/PM indicator
console.log(myClock.getTheFormattedTime());
console.log(myClock.getThe12HourTime());