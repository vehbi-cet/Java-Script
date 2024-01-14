/* gforgeeks 

A number is called happy if it leads to 1 after
a sequence of steps wherein each step number is 
replaced by the sum of squares of its digit that 
is if we start with Happy Number
and keep replacing it with digits square sum,
we reach 1.

24 =

19 = 1 + 81 = 82
82 = 64 + 4 = 68
68 = 36 + 64 = 100
1

*/


export const happyNumber = (num) => {

    let sum = sumTheDigitsSquared(num)
    if(sum === 1) return true

    let countDown = 8

    while (sum != 1 && countDown > 0) {
        sum = sumTheDigitsSquared(sum)
        countDown--
    }

    return sum === 1 ? true : false
}

const sumTheDigitsSquared = (num) => {

    const digitCount = num.toString().length

    let sum1 = 0

    for (let i = 0; i < digitCount; i++) {
        sum1 += Math.pow(num.toString()[i],2)
    }

    return sum1 
}


