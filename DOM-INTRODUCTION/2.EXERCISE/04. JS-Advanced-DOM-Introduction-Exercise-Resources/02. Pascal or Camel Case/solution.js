function solve() {

  let camelCaseText = 'Camel Case'; // пиша си двата възможни кейса който потребителя може да въведе
  let pascalCaseText = 'Pascal Case';

  let textInput = document.getElementById('text').value.toLowerCase(); // взимам си текста който потребителя ми въвежда и го обръщам в малки букви
  let namingConvention = document.getElementById('naming-convention').value; // взимам си и кейса който потребителя въвежда камъл или паскал
  let result = document.getElementById('result'); // и взимам резултата който накрая ще се променя

  if (namingConvention !== camelCaseText && namingConvention !== pascalCaseText) { // ако потребителя въведе нещо различно от тези два кейса то тогава хвърлям грешка
    result.textContent = `Error!`;
    return; // и прекъсвам
  }

  let outputResult = '';
  let inputSplitted = textInput.split(" "); // сплитвам текста който потребителя е въвел което ми връша масив от думи
  let startPoint = 0;

  if (namingConvention === camelCaseText) { // ако потребителя е въвел камъл 
    outputResult += inputSplitted[0]; // пъхам в резултата първата дума
    startPoint = 1; // затова тук стара ми става 1
  }

  for (let i = startPoint; i < inputSplitted.length; i++) { // като обхождам от 1
    let currentWord = inputSplitted[i]; // взимам си думата която е на текущия индекс
    outputResult += currentWord[0].toUpperCase() + currentWord.slice(1, currentWord.length); // правя първата буква на текущата дума главна и я конкатенирам с останалата част на думата
  }

  result.textContent = outputResult;

}
