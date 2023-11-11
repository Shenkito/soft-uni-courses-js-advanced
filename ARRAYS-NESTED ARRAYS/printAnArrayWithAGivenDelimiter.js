function printAnArrayWithAGivenDelimiter(array, delimiter) {

    let result = array.join(delimiter);
    console.log(result);
}

printAnArrayWithAGivenDelimiter(['One', 
'Two', 
'Three', 
'Four', 
'Five'], 
'-');

console.log("=======================");
printAnArrayWithAGivenDelimiter(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!'], 
'_'
);