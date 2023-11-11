function townsToJson(input) {

    let arrayOutput = [];

    for (let line of input.splice(1)) { // итерирам по входните данни като премахвам първия елемент който е Town Latitude и Longitude
        let tokens = line.split("|").map(token => token.trim()).filter(Boolean); // сплитвам по пайп , чрез мапа тримвам всички спейсове около токена , и филтрирам (премахвам) всички фолси (Falsy) токени примерно празни стрингове и т.н
        arrayOutput.push({ // в вече създадения масив пушвам директно
            Town: tokens[0], // града
            Latitude: Number(Number(tokens[1]).toFixed(2)), // латитуда
            Longitude: Number(Number(tokens[2]).toFixed(2)) // лонгитуда , като използвам два пъти Number за да подсигуря , че резултата ще е число а не стринг.
        });
    }

    return console.log(JSON.stringify(arrayOutput));
}

townsToJson([
'| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);

townsToJson(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']);