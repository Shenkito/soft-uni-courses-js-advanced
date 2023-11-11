function extract(content) {

    let p = document.getElementById(content); // взимам си данните който са ми подадени , в случая това е p(параграф).
    let myText = p.textContent; // взимам текст контента на дадения параграф
    let regex = /\((.*?)\)/g; // хващам чрез регекс това което ми е заданено по условие , в случая е нещо което е в ( ) от цял текст

    let matches = [...myText.matchAll(regex)].map(element => element[1]); // запазвам всички елементи който съм мачнал с регекса с map като взимам всеки element от 1 , защото ми връща масиви с по два елемента 0-левия е с () а 1-вия е без.

    return matches.join("; ") // тук ги ретърнвам като стринг , join`ати.

}