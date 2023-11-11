function cookingByNumbers(...input) {

    let num = Number(input.shift());

    for (let i = 0; i < input.length; i++) {

        let command = input[i];

        switch (command) {
            case "chop":
                num = num / 2;
                console.log(num);
            break;
            case "dice":
                num = Math.sqrt(num)
                console.log(num);
            break;
            case "spice":
                num += 1;
                console.log(num);
            break;
            case "bake":
                num *= 3;
                console.log(num);
            break;
            case "fillet":
                num = num - (num * 0.20);
                console.log(num);
            break;
        }
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');