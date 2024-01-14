// For this challenge you will determine if a string contains
// some number of distinct characters.
/* 
have the function DistinctCharacters(str) take the str parameter
being passed and determine if it contains at least 10 distincit characters,
if so, then your program should return the string true,
otherwise it should return the string false.

For example: if str is "abc123kkmmmm?" then your program should return 
the string false because this string contains only 9 distincit
characters: a, b, c, 1, 2, 3, k, m, ? adds up to 9.
*/

export const distinctCharacters = (str) => {

    let charArr = []

    for (let i = 0; i < str.length; i++) {
      charArr.indexOf(str[i]) === -1 && charArr.push(str[i])
    }
    

    return charArr.length >= 10 ? true : false
}