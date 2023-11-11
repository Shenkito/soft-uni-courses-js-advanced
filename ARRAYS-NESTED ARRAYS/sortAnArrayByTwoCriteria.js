function sortAnArrayByTwoCriteria(array) {

    let newArray = [...array];

    newArray.sort((wordA, wordB) => {
        
        if (wordA.length !== wordB.length) {
            return wordA.length - wordB.length;
        }

        return wordA.localeCompare(wordB);
    })

    newArray.forEach(element => {
        console.log(element);
    });
}

/**
If the lengths of wordA and wordB are different, it means they are not equal in length. The conditional statement checks if their lengths are not equal (!== is the "not equal" operator).

If the lengths are not equal, the function returns the result of subtracting wordB.length from wordA.length. By subtracting wordB.length from wordA.length, the function ensures that words with shorter lengths will be placed before words with longer lengths in the sorted array.

For example, if wordA has a length of 3 and wordB has a length of 5, the result of the subtraction will be negative (-2 in this case), indicating that wordA should come before wordB in the sorted array.

If the lengths of wordA and wordB are equal, the comparison function moves to the next step, which is comparing the words alphabetically. This is done using the localeCompare method:
The localeCompare method compares the strings wordA and wordB and returns a negative value if wordA should come before wordB alphabetically, a positive value if wordA should come after wordB, and 0 if they are equal.

By returning the result of wordA.localeCompare(wordB), the comparison function ensures that words with the same length are sorted alphabetically.

Overall, the comparison function used in the sort method ensures that the words are sorted first by length (from shortest to longest), and if they have the same length, they are sorted alphabetically.
*/

sortAnArrayByTwoCriteria(['alpha', 'beta', 'gamma']);
console.log("=====================================");
sortAnArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
console.log("=====================================");
sortAnArrayByTwoCriteria(['test', 'Deny', 'omen', 'Default']);