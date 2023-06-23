export const firstNonRepeating = (strng) => {

    const str = strng.toLowerCase()

    let returnValue = ""

    for (let i = 0; i < str.length; i++) {
        let itemInTheLoop = str[i]
        let newStr = str.slice(0,i) + str.slice(i+1)

        if(returnValue === "" && newStr.indexOf(itemInTheLoop) === -1){
            returnValue = itemInTheLoop
        }
    }

    return returnValue === "" ? "none":returnValue

}

/* 
Write a function named first_non_repeating_letter
that takes a string inbput, and returns the first character 
tahtis not repeated anywhere in the string.

For example, if given the input 'stress',
the function should return the 't', since the letter t only occurs
once this string, and occrus first in the string.

As an added challenge, upper- and lowercase letters are comsidered
the same character, but the function should return the correct
case for the inital letter. For example,
the input 'sTreSS' should return 'T'.

If a string contains all repeating characters,
it should return an empty string("") or None -- see semple tests.
*/