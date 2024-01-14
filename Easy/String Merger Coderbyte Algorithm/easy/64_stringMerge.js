//For this challenge you will be mergering two different strings together.
/* 
have the function StringMerge(str) read the str parameter being passed
which will contain a large string of alphanumeric characters with a 
single asterisk character splitting the string evenly into two separate string
You goal is to return a new string by pairing up the characters
in the corresponding locations in both strings.

For example:
if str is "abc1*kyoo" then your program should return 
the string akbyco1o because a pairs with k, b pairs with y, etc.
The string will always split evenly with the asterisk in the center.

"abc1*kyoo" => "akbyco1o"

*/


export const StringMerge = (str) => {

    const [first, second] = str.split('*')

    let combineWords = ""

    for(let i = 0; i < first.length; i++){
        combineWords += first[i] + second[i]
    }
    return combineWords
}


