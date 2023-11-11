function rotateArray(array, rotationCount) {
    
    let arrClone = [...array];

    for (let i = 0; i < rotationCount; i++) {
        
        let lastNumber = arrClone.pop();
        arrClone.unshift(lastNumber);
    }

    console.log(arrClone.join(" "));
}

rotateArray(['1', 
'2', 
'3', 
'4'], 
2
);

console.log("=======");

// rotateArray(['Banana', 
// 'Orange', 
// 'Coconut', 
// 'Apple'], 
// 15
// );