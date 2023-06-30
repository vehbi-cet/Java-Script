/* 
    Given an array of the integers, return indices of the two numbers sucah that they add up to
    aa specific target.

    You may assume that each input would have exactly one solution and you may not use the
    same element twice.

    Example:
    numbers = [2,7,11,15], target = 9




    Because numbers[0] + numbers[1] = 9

    return [0,1]

*/

export const twoSum=(numArr)=>{

    // unefficient solution 
    /* 
    for(let i = 0; i < numArr.length;i++){
        for(let j = 0; j < numArr.length;j++){
            if(numArr[i] + numArr[j] === 9) return [i,j]
        }
    }
    */

    // Efficient Solution
    for(let i = 0; i < numArr.length;i++){
        let currentValue = numArr[i]
        let difference = 9 - currentValue

        const indexOfSecondValue = numArr.indexOf(difference)

        if(indexOfSecondValue > -1 && numArr[i] != numArr[indexOfSecondValue])
        return [i, indexOfSecondValue]
    }

}