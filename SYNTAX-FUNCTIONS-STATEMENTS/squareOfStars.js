function squareOfStars(num) {

    for (let i = 0; i < num; i ++) {
        let row = "";
        
        for (let j = 0; j < num; j++) {
            row += "* "
        }

        console.log(row);
    }
    
}

squareOfStars(1);
squareOfStars(2);
squareOfStars(5);
squareOfStars(7);