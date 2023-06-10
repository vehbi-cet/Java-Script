
export const additivePersistence = (num) => {
    // Eğer verilen parametre bir rakamsa direk olarak 0 dön
    if(num < 10) return 0

    // Verilen parametrenin rakamlarının toplamını hesapla
    let sumOfDigits = sum(num)
    let additivePersistence = 1
    while(sumOfDigits > 9){
        //console.log(sumOfDigits);
        additivePersistence++
        sumOfDigits = sum(sumOfDigits)
    }

    //return "additivePersistence:"+additivePersistence+"-"+"sumOfDigits:"+sumOfDigits
    return additivePersistence 
}

const sum = (n) => {
    let sum = 0
    const arr = n.toString().split('')
    for(let i = 0; i < arr.length;i++){
        sum += parseInt(arr[i])
    }

    return sum
}


/* 

Additive Persistence
Using the JavaScript language, have the function AdditivePersistence(num) 
take the num parameter being passed which will always be a positive integer
and return its additive persistence which is the number of times you must
add the digits in num until you reach a single digit

For example

if num is 2718 then your program should return 2

because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9.

*/