export const  binaryReversal = (str) => {

    const binary = Number(str).toString(2)

    const binaryWithZeros = ("0".repeat(8-binary.length)) + binary

    const reversedBinary = binaryWithZeros.split('').reverse().join('')


    return parseInt(reversedBinary,2)

    
}

/* 
// have the function BinaryReversal(str) take the str parameter being passed,
which will be a positive integer, take its binary representation, 
reverse that string of bits, and them finally return the  new reversed string
in decimal form. For example: if str is "47" then the binary version of this 
integer is 00101111. Your program should reverse this binary string which then
becomes: 11110100 and then inally return the decimal version of this string, 
which is 244

*/