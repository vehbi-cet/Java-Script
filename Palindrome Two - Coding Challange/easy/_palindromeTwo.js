/* 
Using  the JavaScript language, have the function PalindromeTwo(str)
take the str parameter being passed and return the string true
if the parameter is a palindrome, (the string is the same forward as it is backward)
otherwise return the string false

The parameter entered may have punctuation and symbols but they should not affect
whether the string is in fact a palindrom

For example: "Anne, I vote more cars race Rome-To-Vienna" should return the true
*/


export const PalindromeTwo = (str) => {

    const newStr = str.replace(/[^a-zA-Z]/g,"").toLowerCase()

    return newStr.split('').reverse().join('') === newStr ? true : false
}