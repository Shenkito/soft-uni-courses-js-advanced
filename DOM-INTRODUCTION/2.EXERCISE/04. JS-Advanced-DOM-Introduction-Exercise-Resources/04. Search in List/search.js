function search() {

   let towns = document.querySelectorAll('#towns li'); // взимам си всичките градове който са li`та
   let inputClient = document.querySelector('input').value; // взимам си текста който потребителя пише
   let result = document.getElementById('result'); // и си взимам крайния резултат който после ще пълня с matches по условие

   let inputClientToLowerCase = inputClient.toLowerCase(); // превръщам текста който потребителя е написал в малки букви 
   let resultsCount = 0; // и си правя брояч за match`овете

   for (let li of towns) { // обхождам всеки град , т.е всяко li
      let liToLowerCase = li.textContent.toLowerCase(); // и също го правя в малки букви 

      if (liToLowerCase.includes(inputClientToLowerCase)) { // ако текущото li съдържа текста който потребителя е написал
         li.style.fontWeight = 'bold'; // то тогава уголемявам буквите
         li.style.textDecoration = 'underline' // подчертавам го 
         resultsCount++; // и инкрементирам каунта тъй като имам match
      }
   }

   result.textContent = `${resultsCount} matches found`; // присвоявам към крайния резултат съвпаденията и принтя
   resultsCount = 0; // нулирам брояча
}
