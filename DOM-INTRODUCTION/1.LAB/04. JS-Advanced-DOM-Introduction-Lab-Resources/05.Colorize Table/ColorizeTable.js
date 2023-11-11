function colorize() {
    
    let table = document.querySelector('table'); // взимам си елементите от <table>
    let rows = table.querySelectorAll('tr'); // достъпвам си реда с клетките му който са <td> а реда е <tr><td>

    let currIndex = 0; // правя си counter брояч за индекс тъй като по условие ще трябва да работя с него който е с начална стойност 0

    for (let row of rows) { // итерирам по редовете (и клетките който са в тях)
        currIndex++; // инкрементирам индекса

        if (currIndex % 2 === 0) { // ако той е even
            row.style.background = "teal" // го оцветявам цвета който ми е даден по условие
        }
    }
}