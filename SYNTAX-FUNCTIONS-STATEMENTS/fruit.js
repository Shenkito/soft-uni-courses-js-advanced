function fruitShopping(fruit, weight, pcPerKg) {

    let weightInKg = weight / 1000;
    let moneyNeed = weightInKg * pcPerKg;
    
    console.log(`I need $${moneyNeed.toFixed(2)} to buy ${(weight / 1000).toFixed(2)} kilograms ${fruit}.`);
}

fruitShopping('orange', 2500, 1.80);
fruitShopping('apple', 1563, 2.35);