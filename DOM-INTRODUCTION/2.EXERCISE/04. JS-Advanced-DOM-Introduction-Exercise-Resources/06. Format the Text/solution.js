function solve() {

    let givenTextArea = document.getElementById("input"); // взимам си текст area където потребителя въвежда текста
    let givenTextValue = givenTextArea.value; // взимам си текущия текст
    let outputResult = document.getElementById("output"); // и си взимам output`а
    
    let givenTextSplitted = givenTextValue
        .split(".") // взимам си текста който е въведен , сплитвам го по точка което ми връща масив от изречения
        .filter((sentecnce) => sentecnce !== "") // филтрирам изреченията , тоест ако има празен стринг да изчезне
        .map((sentecnce) => sentecnce + "."); // и после долепям точката , тоест връщам я обратно

    let maxParagraphs = Math.ceil(givenTextSplitted.length / 3); // това е лимита който ми е зададен по услоевие за колко параграфа да имам.

    for (let i = 0; i < maxParagraphs; i++) { // обхождам до лимита
        let currentSentenceses = givenTextSplitted.splice(0, 3).join(""); // от текста си взимам всеки път по 3 изречения (като splice ги премахва т.е мутира) и ги join`вам
        let paragraph = document.createElement('p'); // създавам си параграф <p></p>
        paragraph.textContent = currentSentenceses; // закачам изреченията за него
        outputResult.appendChild(paragraph); // и го закачам към вече съществуващия <div></div> 
        // outputResult.innerHTML += `<p>${currentSentenceses}</p>`;
    }
}