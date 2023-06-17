export const bitWise = (arr) => {

    const p1 = arr[0]
    const p2 = arr[1]

    let newBit = ""

    for(let i = 0; i < arr[0].length; i++){
        if(p1.charAt(i) === "1" || p2.charAt(i) === "1"){
            newBit += "1"
        }else{
            newBit+="0"
        }
    }

    return newBit
}


/* 
For this challenge you will perform a bitwise operation on two binary numbers.
have the function BitwiseTwo(strArr) take the array of strings stored in strArr,
which will only contain two strings of equal length that represent binary numbers,
and return a final binary string  that performed the bitwise AND operation on both
strings.

A bitwise OR operaiton places a 1 in the new string 
where there is a 1 in one locations in the binary strings,
otherwise it places a 0 in that spot.

For example: if strArr is ["1100","0111"] then your program  should return
the string "1111"
*/