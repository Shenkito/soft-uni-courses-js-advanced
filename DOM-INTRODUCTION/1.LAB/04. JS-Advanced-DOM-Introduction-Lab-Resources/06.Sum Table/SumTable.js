function sumTable() {

    let rows = document.querySelectorAll('tbody tr'); // достъпвам си елементите от html`а , което ми връща всичките tr елементи (ред с клетки)
    let totalSum = 0;
    
    
    for (let i = 1; i < rows.length - 1; i++) { // обхождам ги , като почвам от 1 защото на индекс 0 информацията не ми трябва
        let cells = rows[i].cells; // взимам си клетките , което ми връща html колекция от 2 елемента [td, td] което са всъщност клетките (в случая е [item, price])
        let currPrice = Number(cells[1].textContent); // взимам си цената от [1] защото на [0] е item`a
        totalSum += currPrice // и я добавям към цялата сума
    }
    
    let sum = document.getElementById('sum') // взимам си елемента от html`а
    sum.textContent = totalSum; // и при натискане на бутона Sum се печата цялата сума , затова е textContent

}