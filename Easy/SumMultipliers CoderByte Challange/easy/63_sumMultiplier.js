//For this challenge you will determine if two numbers
//can be multiplied to some spesific number.
/* 
have the function SumMultiplier(arr) take the array of numbers 
stored in arr and return the string true if any two numbers can be
multiplied so that the answer is greater than double the sum of all
the elements in the array. If not, return the string false.

For example: if arr is
[2, 5, 6, -6, 16, 2, 3, 6, 5, 3] then the sum of all
then elements is 42
and doubling it is 84

There are two elements in the array,

16 * 6 = 96 and 96 is greater than 84,

so your program should return the string true.
*/

export const SumMultipliers = (arr) => {
    let sum = sumTheArr(arr)
    const secondGreatest = arr.sort((a,b)=>a-b)[arr.length-2]
    const greatest = Math.max(...arr)
    const multiplication = greatest * secondGreatest

    return multiplication > sum*2 ? true:false

}

const sumTheArr = (arr) => {
    return arr.reduce((acc,currentValue)=>{return acc + currentValue},0)
}