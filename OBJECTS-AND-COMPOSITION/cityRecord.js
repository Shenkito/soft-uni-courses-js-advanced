function cityRecord(name, population, treasury) {

    let cityRecordObj = {
        name,
        population,
        treasury
    };

    return cityRecordObj;
}

console.log(cityRecord('Tortuga',
7000,
15000));

console.log(cityRecord('Santo Domingo',
12000,
23500));