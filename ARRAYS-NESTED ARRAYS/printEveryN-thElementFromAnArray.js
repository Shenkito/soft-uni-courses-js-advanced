function printEveryNthElementFromAnArray(array, step) {

    let result = [];

    for (let i = 0; i < array.length; i+= step) {
        let currentElement = array[i];
        result.push(currentElement);
    }

    return result;
}

printEveryNthElementFromAnArray(['5', 
'20', 
'31', 
'4', 
'20'], 
2);

console.log("====================");

printEveryNthElementFromAnArray(['dsa',
'asd', 
'test', 
'tset'], 
2);

console.log("====================");

printEveryNthElementFromAnArray(['1', 
'2',
'3', 
'4', 
'5'], 
6);