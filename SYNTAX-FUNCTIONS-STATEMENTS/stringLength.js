function stringLength(elOne, elTwo, elThree) {
    
    let totalLength = elOne.length + elTwo.length + elThree.length;
    let avgLength = Math.floor((totalLength / 3));
    
    console.log(totalLength);
    console.log(avgLength);
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');