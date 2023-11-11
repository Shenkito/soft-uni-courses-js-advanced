function pieceOfPie(arr, string1, string2) {

    let indexOfString1 = arr.indexOf(string1);
    let indexOfString2 = arr.indexOf(string2);

    let newArr = arr.slice(indexOfString1, indexOfString2 + 1);
    return newArr;
}

console.log(pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'));

console.log("-------------");

console.log(pieceOfPie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'));