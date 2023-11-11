function deleteByEmail() {

    let emailInputElement = document.querySelector(`input[name=email]`); // querySelector защото ми трябва само един елемент и селектора вътре ми намира инпут на който има атрибут name на който има стойност e-mail. (ако искам да изброявам атрибути ползвам [])
    let emailCellElements = document.querySelectorAll(`tr td:nth-of-type(2)`) // взимам си всички email`и -> в tablerow търся tabledata която е втора под ред което ми връща nodelist с само имейлите

    let emailsArray = Array.from(emailCellElements); // обръщам си ги в масив
    let targetEmail = emailsArray.find(e => e.textContent === emailInputElement.value); // търся в масива е(email) който текст контента да му е равен на email`a който потребителя е въвел

    
    if (targetEmail) { // ако го има
        targetEmail.parentNode.remove(); // изтривам не само email`a но и родителя му в случая името на човека
        document.getElementById('result').textContent = 'Deleted.'; // и изписвам
    } else {
        document.getElementById('result').textContent = 'Not found.'; // ако го няма просто изписвам , че го няма
    }

}