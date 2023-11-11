function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      
      let input = document.getElementById('searchField').value.toLowerCase(); // взимам си инпута който потребителя въвежда
      let rows = document.querySelectorAll('tbody tr'); // взимам си всички редове от таблицата

      for (let row of rows) { // обхождам ги 
         let textContentRow = row.textContent.toLowerCase(); // взимам текстовата им стойност

         if(textContentRow.includes(input)) { // проверявам дали инпута който потребителя въвежда го има в редовете
            row.setAttribute('class', 'select'); // ако го има то тогава задавам да се селектира което ще направи текушия ред селектиран(маркиран)
         } else {
            row.removeAttribute('select') // ако въведения инпут от потребителя не се съдържа то тогава примахвам атрибута select
         }
      }
   }
}