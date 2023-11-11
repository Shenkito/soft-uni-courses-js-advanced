function listOfNames(array) {

    let newArr = [...array];

    let sorted = newArr.sort((a, b) => a.localeCompare(b));

    sorted.forEach((currName, index) => {
        console.log(`${index + 1}.${currName}`);
    })
    
}

listOfNames(["John", 
"Bob", 
"Christina", 
"Ema"]);