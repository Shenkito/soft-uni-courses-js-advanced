function calc() {

  let num1 = Number(document.getElementById("num1").value); // взимам си елемента по id и неговото value което потребителя ще въведе
  let num2 = Number(document.getElementById("num2").value); // тук също
  let sum = document.getElementById("sum"); // взимам си елемента който трябва да е крайната сума след изчислението

  sum.value = num1 + num2; // и тук му задавам value което ще се получи след кликане на бутона в случая calc
}
