function addAndRemoveElements(array) {


    let num = 1;
    let result = [];

    for (let i = 0; i < array.length; i++) {

        if (array[i] === "add") {
            result.push(num);
            num++;
        } else if (array[i] === "remove") {
            result.pop(num);
            num++;
        }

    }

    if (result.length === 0) {
        console.log("Empty");
    }

    for (let num of result) {
        console.log(num);
    }

}

addAndRemoveElements(['add', 
'add', 
'add', 
'add']
);
console.log("============");
addAndRemoveElements(['add', 
'add', 
'remove', 
'add', 
'add']);
console.log("===========");
addAndRemoveElements(['remove', 
'remove', 
'remove']
);