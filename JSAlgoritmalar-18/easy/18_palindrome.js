
export const isPalindrome = (str) => {

    const newStr = str.replace (/ /g, "").toLowerCase()

    return newStr.split('').reverse().join('') === newStr ? true : false

}

/* 

Palindrome

Using the JavaScript languge, have the function Palindrome(str)
take the str parameter being passed and return the string true if
the parameter is a palindrome, (the string is the same forward as
    it is backward) otherwise return the string false

   For example: "racecar" is also "racecar" backwards.
--Punctuation and numbers will not be part of the string.   

*/