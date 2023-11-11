function editElement(reference, match, textReplace) {
    let text = reference.textContent; // взимам си референцията която е текст затова ползвам textContent;
    let regex = new RegExp(match, 'g'); // създавам регекс който да ми спази условието което ми е зададено
    let result = text.replace(regex, textReplace); // присвоявам резултата като заменям което съм хванал с регекса , това което трябва да сложа по условие
    reference.textContent = result; // и референцията вече присвоява резултата
}