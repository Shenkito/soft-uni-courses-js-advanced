function attachGradientEvents() {

    let gradientBoxElement = document.getElementById('gradient'); // взимам си елемента
    let resultElement = document.getElementById('result'); // тук също

    let gradientMousemoverElement = (e) => {
        debugger;
        let offsetX = e.offsetX; // взимам мишката къде се намира спрямо текущия елемент по който ховоувървам
        let element = e.target; // взимам елемента който е текущия върху който се изпълнява (т.е gradient)
        let elementX = element.clientWidth; // взимам ширината на елемента
        let percent = Math.trunc((offsetX / elementX) * 100); // и за да намеря къде точно е мишката разделям текущото положение деля го на ширината
        resultElement.textContent = `${percent}%`;
    };

    let gradientMouseoutElement = (e) => {
        resultElement.textContent = '';
    };

    gradientBoxElement.addEventListener('mousemove', gradientMousemoverElement); // закачам ги тук защото използвам ароу функции , ако ползвам нормални мога да ги създам горе в кода
    gradientBoxElement.addEventListener('mouseout', gradientMouseoutElement);
}