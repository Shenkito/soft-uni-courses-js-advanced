function storeCatalogue(input) {

    let sortedArray = input.sort((a, b) => a.localeCompare(b)); // сортирам по азбучен ред.
    let catalogueResult = {};

    for (let i = 0; i < sortedArray.length; i++) { // итерирам по сортирания вече масив
        let currElement = sortedArray[i].split(" : ").join(": "); // сплитвам елементите и после добавям чрез join иска се така при принтирането на резултата
        let firstChar = currElement[0]; // проверявам първата буква на елемента

        if (!catalogueResult[firstChar]) { // ако в каталога няма въпросната буква
            catalogueResult[firstChar] = []; // добавям я буква => празен масив
        }

        catalogueResult[firstChar].push(`  ${currElement}`); // ако я има към нея добавям и елемента(продукта и цената?)
    }

    let outputResult = []; // 

    for (let key in catalogueResult) { // итерирам по обекта
        let product = catalogueResult[key]; // взимам си елемента(продукта и цената?)
        outputResult = [...outputResult, key, ...product] // и пъхам в масива чрез деструктуриране
    }

    console.log(outputResult.join('\n'));
}

storeCatalogue([
'Appricot : 20.4', 
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);