// For this challenge you will be converting a string into snake case format
/* 
have the function SnakeCase (str) take the str parameter being passed and return 
it in proper snake case format where each word is lowercased and separated from 
adjecent words via an underscore. The string will only contain letters and some  
combination of delimeter  punctutation characters separating each word.

For example: if str is "BOB loves-coding" then your program should return 
the string bob_loves_coding.
*/

export const snakeCase = (sentence) => {

    return sentence.replace(/[^a-zA-Z]/g,"_").toLowerCase()

    
}