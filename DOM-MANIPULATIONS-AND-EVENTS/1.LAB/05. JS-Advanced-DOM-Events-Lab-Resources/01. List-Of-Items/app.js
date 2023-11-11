// function addItem() {

//     let clientInput = document.getElementById('newItemText').value; // взимам си полето където потребителя пише текста
//     let newLi = document.createElement('li'); // създавам си ново li както се иска по условие

//     newLi.appendChild(document.createTextNode(clientInput)); // тук създавам нов текст ноуд (textNode) който е с съдържанието на инпута който идва от потребителя и го закачам
//     document.getElementById('items').appendChild(newLi); // закачването
//     document.getElementById('newItemText').value = ''; // като след написаното от поребителя в полето и закачването полето се чисти както е по условие 
// }

function addItem() {
    let inputClientElement = document.getElementById('newItemText').value; // взимам си инпута който потребителя ми вкарва
    let itemsElement = document.getElementById('items'); // взимам си елементите (ul#items)
    let li = document.createElement('li'); // създавам си ново li

    li.textContent = inputClientElement; // и му присвоявам инпута който вече е потребителския въведен
    itemsElement.appendChild(li); // и го закачам към останалите елементи в items

    let deleteLink = document.createElement('a'); // създавам delete link (анкър таг)
    deleteLink.href = '#'
    deleteLink.textContent = '[Delete]' // да изглежда така
    li.appendChild(deleteLink); // закачам линка към li

    deleteLink.addEventListener('click', function () { // и му слагам eventListener при кликване
        li.remove(); // даденото li да се трие
    });

    // deleteLink.addEventListener('click', (e) => { може и така
    //     e.currentTarget.parentElement.remove() // като 'е' ми е текущия елемент с currentTarget
    // }); 

    document.getElementById('newItemText').value = '';
} 