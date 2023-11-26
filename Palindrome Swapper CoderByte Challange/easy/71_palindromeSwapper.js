
/* 
have the function PalindromeSwapper(str) take the str
 parameter being passed and determine if a palindrome
 can be created by swapping two adjacent characters
 in the string. If it is possible to create a palindrome,
 then your program should return palindrome,
 if not then return the string -1. 

 The input string will only contain alphabetic characters.
 For example: if str is "rcaecar" then you can create a
 palindrome by swapping the second and third characters,
 so your program should reutrn the string racecar which
 is the final palindromic string.
*/


export const palindromeSwapper = (str) => {

    if(str === str.split('').reverse().join('')) return "palindrome"

    for (let i = 0; i < str.length-1; i++) {
        let arr = str.split('')
        let temp1 = arr[i]
        let temp2 = arr[i+1]
        arr[i] = temp2
        arr[i+1] = temp1

        const newStr = arr.join('')

        if(newStr === newStr.split('').reverse().join('')) return newStr +" is palindrome" 
    }
    
    
    return -1
}




