//Count number of Vowels in String
function countVowel(str) {
    let count = 0; // Use lowercase variable names (e.g., count instead of Count)
     var str = str.toLowerCase(); // Correct method name toLowerCase() instead of toLowercase()
    
    for (var i = 0; i < str.length; i++) {
        // Use str.charAt(i) to get the character at the current index i
        if (str.charAt(i) === 'a' || str.charAt(i) === 'e' || str.charAt(i) === 'i' || str.charAt(i) === 'o' || str.charAt(i) === 'u') {
            count++;
        }
    }
    
    return count; // Move the return statement outside of the loop
}

console.log(countVowel("Elena")); // Correct function name countVowel instead of countvowel
console.log(countVowel("Wema"));  // Correct function name countVowel instead of countvowel



