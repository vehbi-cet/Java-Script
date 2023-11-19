/* For this challenge you will be counting how many times 
a specific pattern occurs in a large number.

have the function OneDecremented(num) count
how many times a digit appears that is exactly one less than
the previous digit. For example: if num is 5655984 then your 
program should return 2 because 5 apperas directly after 6 and 8
apperas directly after 9.

The input will always contain at least 1 digit.
*/

export const OneDecrementd = (num) => {

    let count = 0
    const numStr = num.toString()

    for (let i = 1; i < numStr.length; i++){
        if(numStr[i-1] - numStr[i] == 1) count +=1

    }

    return count
}