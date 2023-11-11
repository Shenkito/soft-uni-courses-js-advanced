function wordsUppercase(string) {

    let words = string.match(/\b\w+\b/g);
    let result = words.map(word => word.toUpperCase());
    let toString = result.join(", ");
    return toString;
    
}

console.log(wordsUppercase('Hi, how are you?'));
console.log(wordsUppercase('hello'));