function calorieObject(arrProducts) {

    let result = {};

    for (let i = 0; i < arrProducts.length; i += 2) {
        let product = arrProducts[i];
        let calories = Number(arrProducts[i + 1]);
        result[product] = calories;
    }

    console.log(result);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);