function timeToWalk(steps, footPrintMeters, speedKmh) {
    let distanceMeters = steps * footPrintMeters;
    let timeHours = distanceMeters / (speedKmh * 1000);
    let timeMins = Math.floor((timeHours * 60) + (Math.floor(distanceMeters / 500) * 1));
    let timeSec = Math.round((timeHours * 3600) + (timeMins * 60)) % 60;

    let hours = Math.floor(timeMins / 60).toString().padStart(2, 0);
    let mins = (timeMins % 60).toString().padStart(2, 0);
    let secnds = timeSec.toString().padStart(2, 0);

    console.log(`${hours}:${mins}:${secnds}`);
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);