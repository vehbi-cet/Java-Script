/* For this challenge you will be determining if a string produces
a valid serial number.

have the function SerialNumber(str) take the str parameter being
passed and determine if it is a valid serial number with the 
following constrains:

1. It needs to contain three sets each with three digits
(1 through 9) separated by a period.

2. The first set of digits must add up to an even number. 

3. The second set of digits must add up to an odd number.

4. The last digit in each set must be larger than the two 
previous digits in the same set. 

If all the above constraints are met within the string,
the your program should return the string true,
otherwise your program should return the string false.

For example: if str is "224.315.218" then your program should return "true"

*/

export const serialNumber = (str) => {

    const [first, second, third] = str.split('.')

    if(
        first.length != 3 || first.indexOf('0') > -1 ||
        second.length != 3 || second.indexOf('0') > -1||
        third.length != 3 || third.indexOf('0') > -1
    ) return false

    if(evenOdd(first) != "even") return false
    if(evenOdd(second) != "odd") return false

    if(!isLastDigitGreatest(str.split('.'))) return false


    return true
}

const evenOdd = (set) => {
    let sum = 0

    for (let i = 0; i < set.length; i++) {
        sum += Number(set[i])
    }

    return sum % 2 === 0 ? "even" : "odd"
}


const isLastDigitGreatest = (sets) => {

    let result = true

    sets.forEach(set => {
        if(set[2] <= set[1] || set[2] <= set[0]) result = false
    });

    return result
}