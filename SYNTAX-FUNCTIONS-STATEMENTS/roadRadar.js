function roadRadar(speed, area) {
    switch (area) {
        case "city": {
            let limit = 50;
            if (speed <= limit) {
                console.log(`Driving ${speed} km/h in a ${limit} zone`);
            } else {
                let diff = speed - limit;
                let status;
                if (diff <= 20) {
                    status = "speeding";
                } else if (diff <= 40) {
                    status = "excessive speeding";
                } else {
                    status = "reckless driving";
                }
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`);
            }
            break;
        }
        case "residential": {
            let limit = 20;
            if (speed <= limit) {
                console.log(`Driving ${speed} km/h in a ${limit} zone`);
            } else {
                let diff = speed - limit;
                let status;
                if (diff <= 20) {
                    status = "speeding";
                } else if (diff <= 40) {
                    status = "excessive speeding";
                } else {
                    status = "reckless driving";
                }
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`);
            }
            break;
        }
        case "interstate": {
            let limit = 90;
            if (speed <= limit) {
                console.log(`Driving ${speed} km/h in a ${limit} zone`);
            } else {
                let diff = speed - limit;
                let status;
                if (diff <= 20) {
                    status = "speeding";
                } else if (diff <= 40) {
                    status = "excessive speeding";
                } else {
                    status = "reckless driving";
                }
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`);
            }
            break;
        }
        case "motorway": {
            let limit = 130;
            if (speed <= limit) {
                console.log(`Driving ${speed} km/h in a ${limit} zone`);
            } else {
                let diff = speed - limit;
                let status;
                if (diff <= 20) {
                    status = "speeding";
                } else if (diff <= 40) {
                    status = "excessive speeding";
                } else {
                    status = "reckless driving";
                }
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`);
            }
            break;
        }
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');