function carFactory(carInput) {

    if (carInput.power <= 90) {
        carInput.engine = { power: 90, volume: 1800 };
        delete carInput.power;
    } else if (carInput.power <= 120) {
        carInput.engine = { power: 120, volume: 2400 };
        delete carInput.power;
    } else if (carInput.power <= 200) {
        carInput.engine = { power: 200, volume: 3500 };
        delete carInput.power;
    }

    if (carInput.carriage === 'hatchback') {
        carInput.carriage = {
            type: 'hatchback',
            color: carInput.color
        }
        delete carInput.color;
    } else if (carInput.carriage === 'coupe') {
        carInput.carriage = {
            type: 'coupe',
            color: carInput.color
        }
        delete carInput.color;
    }

    if (carInput.wheelsize % 2 === 0) {
        let currSize = carInput.wheelsize - 1;
        carInput.wheels = [currSize, currSize, currSize, currSize]
        delete carInput.wheelsize; 
    } else {
        let currSize = carInput.wheelsize;
        carInput.wheels = [currSize, currSize, currSize, currSize];
        delete carInput.wheelsize;
    }

    return carInput;
}

    carFactory({
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    });


    carFactory({
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    });