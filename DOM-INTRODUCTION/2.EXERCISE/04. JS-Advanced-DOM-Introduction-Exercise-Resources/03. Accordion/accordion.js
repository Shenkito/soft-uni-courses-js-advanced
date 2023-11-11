function toggle() {

    let button = document.querySelector(".button"); // взимам си бутона като слагам . когато искам да селектирам span елемент
    let text = document.getElementById("extra"); // взимам си и текста

    if(button.textContent === "More") { // ако бутона е more , като се натисне (показва скрития текст затова е block)
        button.textContent = "Less"; // и тогава го променям на less
        text.style.display = "block"
    } else if (button.textContent === "Less") { // и обратното ако е вече less 
        button.textContent = "More" // го правя на more
        text.style.display = "none" // и скривам текста
    }

}