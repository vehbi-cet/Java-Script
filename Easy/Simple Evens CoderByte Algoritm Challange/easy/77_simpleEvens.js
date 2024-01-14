//  For this challenge you will be checking whether a
//number is even
/* 
have the function SimpleEvens(num) check whether
every single number passed in parameter is even.

If so, return the string true, otherwise return
the string false.

For example: if num is 4 602 225
your program should return the string false because
5 is not an even number.
*/

export const simpleEvens = (num) => {

    let result = true

    num.toString().split('').forEach((n)=>{
        if(n % 2 != 0) result = false
    })

    return result

}




