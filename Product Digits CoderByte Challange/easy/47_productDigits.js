/* 
Challenge
Using the JavaScript language, have the function ProductDigits(num)
take the num parameter being passed which will be a positive integer,
and determine the least amount of digits you need to multiply to 
produce it.

For example: if num is 24 then you can multiply 8 by 3
 which produces 24, so your program should return 2 because
 there is a total of only 2 digits that are needed.
 
 Another example; if num is 90, you can multiply 10 * 9,
 so in this case your program should output 3 because
 you cannot reach 90 without using a atotal of 3 digits in
 your multiplication.
Sample Test Cases
Input:6
Output:2
Input:23
Output:3
*/




export const ProductDigits = (num) => {

    let multipliers = []

    for(let i = 1; i <= num; i++){
        num % i === 0 && multipliers.push(i)
    }

    let medium = multipliers.length/2

    console.log(multipliers[medium-1] + "-" + multipliers[medium]);

    if(multipliers[medium-1] * multipliers[medium] === num){
        console.log(multipliers[medium-1].toString().length +
        multipliers[medium].toString().length);
    }


    return multipliers
}