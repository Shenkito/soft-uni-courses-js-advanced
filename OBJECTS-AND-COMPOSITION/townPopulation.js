function townPopulation(array) {

    let obj = {};

    for (let lines of array) {
        let line = lines.split("<->");
        let city = line[0];
        let population = Number(line[1]);

        if (!obj.hasOwnProperty(city)) {
            obj[city] = population
        } else {
            obj[city] += population;
        }
    }

    let entries = Object.entries(obj);
    console.log(entries.map((x) => x.join(": ")).join('\n'));

    // for (let [city, population] of entries) {
    //     console.log(`${city}: ${population}`);
    // }

    // for (let keys in obj) {
    //     console.log(`${keys}: ${obj[keys]}`);
    // }
    
}

townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);

console.log("=======================");

townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);