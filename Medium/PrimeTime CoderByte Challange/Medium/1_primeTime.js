// For this challenge you will be determinig if an argument is a prime number.
/* have the function PrimeTime(num) take the num parameter being passed and return the string true if the parameter being passed and return the string true if the parameter is a prime number, otherwise return the string false. The range will be between 1 and 2^16
*/


//                             ****NOTES***

// 1 is neither prime nır composite number(a positive number (= larger than zero) that can be divided by positive numbers other than 1 and itself)

// 2 is prime number (divisible by itself and 1) 2, 3, 5, 7, 11


export const primeTime = (num) => {

    if(num <= 1) return false
    if(num === 2) return true
    if(num > Math.pow(num,16)) return false

    let isPrime = true

    for (let i = 2; i < Math.ceil(num/2); i++) {
        if(num % i === 0) isPrime = false
    }

    return isPrime
}

