function extractText() {
    let items = document.getElementById("items").getElementsByTagName("li"); // взимам си елементите по ID , първо от items`a после взимам елементите по tag name
    let result = document.getElementById("result"); // взимам си елемента по ID което в случая е текст area

    for (let i = 0; i < items.length; i++) { // обхождам по елементите
        let itemText = items[i].textContent; // взимам си текста на всеки елемент с textContent тъй като работя с стрингове т.е текстове
        result.value += itemText + "\n"; // и ги пъхам в result value`то (value е когато потребителя интерактва с нещо)
    }
}