/* 
Givan a string, count total number of consonants
 in it. A consonant is a English alpahet character
  that is not vowel (a, e, i, o and u).    
  Examples of consotants are b, c, d, f, g, ..  
*/


export const countConsonant = (str) => {

    let count = 0

    const regEx = /[^aeiouAEIOU]/

    for (let i = 0; i < str.length; i++) {
        regEx.test(str[i]) && count++
    }

    return count
}

