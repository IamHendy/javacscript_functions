//check if an input string is a palindrome

function checkPalindrome(str){
    for(var i = 0; i <str.length;i++){
        if (str.charAt(i)!== str.charAt(str.length- i - 1)) {
            return false
        }
        return true
    }

}
console.log(checkPalindrome("madam"))
console.log(checkPalindrome("racecar"))
console.log(checkPalindrome("hendy"))

