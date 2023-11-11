function cityTaxes(name, population, treasury) {

    let city = { // създавам обекта като взимам данните от инпута
        name,
        population,
        treasury
    };

    city.taxRate = 10; // динамично добавям нови данни

    city.collectTaxes = function () { // с този синтаксис добавям и функция
        this.treasury += this.population * this.taxRate // тъй като е фукнция използвам this.
    }

    city.applyGrowth = function (percentage) { // /=/=/=/=/=/=/
        this.population += (this.population * percentage) / 100;
    }

    city.applyRecession = function (percentage) { // /=/=/=/=/=/=/
        this.treasury -= (this.treasury * percentage) / 100;
    }

    return city;
}

// const city =
//     cityTaxes('Tortuga',
//         7000,
//         15000);
// console.log(city);

const city = // това е резултат от функцията , която вече е един готов обект.
    cityTaxes('Tortuga',
        7000,
        15000);
city.collectTaxes(); // тук викам вече през променливата която е приела готовия обект 
console.log(city.treasury); // -//-
city.applyGrowth(5); // -//-
console.log(city.population); // -//-
