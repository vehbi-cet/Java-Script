/* 
Challenge
Using the JavaScript language, have the function PalindromeCreator(str)
take the str parameter being passed and determine if it is possible
to create a palindromic string of at least 3 characters by
removing 1 or 2 characters.

For example: if str is "abjchba" then you can remove the characters jc
to producte "abhba" which is a palindrome.

For this example your program should return the two characters 
that were removed with no delimiter and in the order they appear
in the string, so jc. If 1 or 2 characters cannot be removed to produce
a palindrome, then return  the string not possible.

If the iinput string is already a palindrome, your progam should return
the string palindrome.

The input will only contain lowercase alphabetic characters.
Your program should always attempt to create the longest palindromic substring
by removing 1 or 2 characters (see second sample test case as an example).
The 2 characters you remove do not have to be adjecent in the string.

Sample Text Cases  
Input:"mmop"
Output:"not possible"

Input:"kjjjhjjj"
Output:"k"
*/


//abjchbe [j,abchbe] [c, abhbe]


export const Pcreator = (str) => {

    const strippedStr = str.replace(/[^a-zA-Z]/g,"").toLowerCase()    

    if(isPalindrome(strippedStr)) return "The String itself is a palindrome"

    let removedLettes =[]

    let [removed, newStr] = removeLetter(strippedStr)
    removedLettes.push(removed)

    if(isPalindrome(newStr)===true){
        return removed
    }else{
        let [removed2,newStr2] = removeLetter(newStr)
        removedLettes.push(removed2)

        if(isPalindrome(newStr2) === true){
            return removedLettes.join('')
        }else{
            return " Not Palindrome Material"
        }

    }

}


function isPalindrome(word){
    return word.split('').reverse().join('') === word ? true : false
}


function removeLetter(str){
    let it = Math.floor(str.length/2)
    let arr = str.split('')

    for(let i = 0; i < it; i++){
        if(str[i] != str[str.length-1-i]){
            arr.splice(i,1)
            return [str[i], arr.join('')]
         }
    }
}