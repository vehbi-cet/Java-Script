/* For this challenge you will determine the greatest common factor  of 
two numbers.

have the function GCF(arr) take the array of numbers stored in arr
which will always contain only two positive integers,
and return the greatest common factor of them.

For example: if arr is [45, 12] then your program should return 3. 
There will always be two elements in the array and they will be 
positive integers.
*/

export const gCF = (arr) => {

    const [first, second] = arr
    let cielingValue = Math.min(...arr)

    let divisors = []

    for (let i = 1; i < cielingValue; i++) {
        if(first % i === 0 && second % i === 0) divisors.push(i)
    }
    console.log(divisors);
    return Math.max(...divisors)
} 