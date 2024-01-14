/* For this challenge you will be returning a certain prime number.
 have the function PrimeMıver(num) return the numth prime number .
 The range will be from 1 to 10^4.

For example: if num is 16
the output should be 53 as 53 is the 16th prime number.
*/
export const nthPrime = (nth, limit) =>{

    let obj = {}
    for (let i = 2; i < limit; i++){
        obj[i] = true
    }

    for( const key in obj){
        for (let j = 2; j < key; j++) {
            if(key % j === 0) obj[key] = false
        }
    }

    let newArr = []
    for (const key in obj){
        if(obj[key]===true) newArr.push(key)
    }

    return newArr[nth-1]
}



