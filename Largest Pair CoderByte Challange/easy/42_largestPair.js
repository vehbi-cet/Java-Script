export const  largestPair = (num) => {

    if (num.toString().length === 2){
        const numR = parseInt(num.toString().split('').reverse().join(''))
        const arr = [num, numR]

        return (Math.max(...arr)) % 2 === 0
        ? (Math.max(...arr))
        : (Math.min(...arr)) % 2 === 0 ? Math.min(...arr):
        "The number consists only with odd numerics"
    }

    const arr1 = num.toString().split('')
    arr1.sort((a,b)=>b-a)

    let tensDigit = arr1[0]

    let unitsDigit = returnUnitsDigit(arr1)

    if(unitsDigit === undefined){
        return tensDigit % 2 === 0 ? arr1[1] + tensDigit:"The number consists only with odd numerics"
    }else{
        return tensDigit + unitsDigit
    }


}

const returnUnitsDigit = (arr) => {
    let unit;

    for (let i = 1; i < arr.length; i++) {
        if(arr[i] % 2 === 0){
            unit === undefined ? unit = arr[i] : unit
        }
    }

    return unit
}



/* 
 have the function LargestPair(num) take the num parameter
 being passed and determine the largest double digit number
 within the whole number. For example: if num is 4759472 then 
 üyour program should return 94 because that is the largest double
 digit number. The input will always contain at least
 two positive digits.  
*/

// sayıyı oluşturan rakamların hepsinin tekolması ?
// 0'ın çift sayılıp sayılmaması ve pozitif olma durumu?
// sayıların tekerrür etmesi