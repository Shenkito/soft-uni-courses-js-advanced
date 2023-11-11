function lowestPricesInCities(input) {

    let result = {};

    for (let lines of input) { // итерирам като си взимам всички елементи в линията
        let line = lines.split(" | ");
        let town = line[0];
        let product = line[1];
        let price = Number(line[2]);

        if (!result.hasOwnProperty(product)) { // ако нямам продукта в резултата
            result[product] = {}; // то тогава го пъхам като създавам продукт -> обект
        }

        result[product][town] = price; // ако вече го имам към него по-точно към вложения обект добавям град -> цена
    }

    for ([product, town] of Object.entries(result)) { // итерирам по entry`тата 
        let sortedByCheapPrice = Object.entries(town).sort((a, b) => a[1] - b[1]); // взимам стойностите под town , който ще са цените и ги сортирам която от малка към голяма както е по условие

        let [currTown, currPrice] = sortedByCheapPrice[0]; // което ще ми въре масиви
        // console.log(`${product} -> ${currPrice} (${currTown})`);
    }
}

lowestPricesInCities([
'Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']);