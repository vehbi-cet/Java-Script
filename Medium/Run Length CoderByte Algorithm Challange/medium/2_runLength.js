// For this challenge you will determine the Run Length Endcoding of a string.
/* have the function RunLength(str) take the str parameter being passed and return a comporessed version of the string using the Run-length encoding algorithm. This algorithm works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence.

For example "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols. 
*/


export const runLength = (str) => {

    let obj = {}
    let newStr = ""

    for(let i = 0; i < str.length; i++){
        str[i] in obj ? obj[str[i]] = obj[str[i]] + 1 : obj[str[i]] = 1
    }

    for (let i = 0; i < Object.keys(obj).length;i++) {
        newStr += Object.values(obj)[i]
        newStr += Object.keys(obj)[i]
    }


    return newStr
}
