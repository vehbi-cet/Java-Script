export const bitWiseTwo = (arr) => {

    let bit = ""

    for (let i = 0; i < arr[0].length; i++) {
        arr[0][i] === "1" && arr[1][i] === "1" ? bit += "1" : bit += "0"
    }

    return bit
}
/* 
For this challenge you will perform a bitwise
operaiton on two binary numbers.
have the function BitwiseTwo(atrArr)
take the array of strings stored in strArr,
which will only contain two strings of equal
length that represent binary numbers,
and return a final binary string that
performed the bitwise AND operaiton on both strings.
A bitwise And operation places a 1 in the new string
where there is a 1 in both locations in the binary strings,
otherwise it places a 0 in that spot.

For example: if strArr is ["10111", "01101"]
then your program should returnh the string "00101"
*/