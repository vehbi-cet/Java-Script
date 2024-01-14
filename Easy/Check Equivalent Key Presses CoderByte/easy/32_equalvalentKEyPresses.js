/* 
For this week, we'll be solving a coding problem that was gicen in an
actual Google phone screen interview.
Remember to head over to Coderbyte to submit your code!

Write a function that takes an array contatining two
strings where each string represents keypresses separated by commas.
For this problem, a key press can be either a printable character or
a backspace (represented by -8). Your function should determine if
the two strings of keypresses are equivalent.

You can produce a printable string from such a string of keypresses
by having backspaces erase one preceding character.
Consider two strings of keypresses equivalent if they
produce the same printable string. For example:


(["a,b,c,d", "a,b,c,c,-B,d"]) // true
(["-B,-B,-B,c,c", "c,c"]) // true
(["", "a,-B,-B,a,-B,a,b,c,c,c,d"]) // false

*/


export const equivalentKeyPresses = (arr) => {
    const firstKeys = returnOnlyKeys(arr[0].split(','))
    const secondKeys = returnOnlyKeys(arr[1].split(','))

    console.log(firstKeys);
    console.log(secondKeys);

    return firstKeys === secondKeys ? true : false
}


const returnOnlyKeys = (strArr) => {

    if(strArr.indexOf("-B") === -1) return strArr.join(',')

    for (let i = 0; i < strArr.length; i++) {
        if(
            strArr[i] === "-B" &&
            strArr[i-1] != "-B" &&
            strArr[i-1] != undefined
        ) strArr.splice(i-1,2)
    }

    return strArr.filter((key)=>{return key != "-B"}).join(',')
}


