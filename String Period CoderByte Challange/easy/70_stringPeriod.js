// For this challenge you will need to find the smallest repeating substring.

/*
have the function StringPeriods(str) take the str parameter being passed
and determine if there is some substring K that can be repeated
N > 1 times to produce the input string exactly as it apperas.
Your program should return the longest substring K, and if there is none
it should return the string -1.

For example: if str is "abcababcababcab" then your program should return 
abcab because that is the longest substring that is repetated 3 times to 
create the final string

Another example: if str is "abababababab"
then your program should return ababab because it is the longest substring.
If the input string contains only a single character,
your program should return the string -1.

a - bcababcababcab
ab - cababcababcab
abc - ababcababcab
abca - babcababcab
abcab - abcababcab

klmcbvxyazv str.slice(j, str.length)
lmcbvcbvxyz
mcbvcbvxyz
cbvxbvxyz
bvcbvxyz
vcbvxyz
cbvxyz

*/



export const stringPeriods = (str) => {

    if(str.length < 2) return -1

    let recursives = getRecursives(str)


    if(recursives == ''){
        for(let j = 2; j < str.length; j++){
            recursives.push(getRecursives(str.slice(j,str.length)))
        }
    }else{
        return recursives[recursives.length-1]
    }

    let lengthOfArrs = []
    recursives.forEach(arr=>lengthOfArrs.push(arr.length))
    let indexOfLargestArr = lengthOfArrs.indexOf(Math.max(...lengthOfArrs))

    return recursives[indexOfLargestArr][recursives[indexOfLargestArr].length-1]
}

const getRecursives = (subStr) => {
    let recursive = []

    for(let i = 0; i < subStr.length; i++){
        let temp = subStr.slice(0,i)
        subStr.slice(i,subStr.length).includes(temp)&&recursive.push(temp)
    }

    return recursive
}