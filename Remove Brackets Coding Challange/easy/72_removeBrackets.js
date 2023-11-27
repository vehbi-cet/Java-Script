// For this challenge you will determine how to create evenly matched br
/* 
have the functions RemoveBrackets(str) take the str string parameter 
being passed, which will contain only the characters "(" and ")" ,
and determine the minimum number of brackets that need to 
be removed to create a string of correctly matched brackets.

For example if str is "(()))" then your program should return 
the number 1. The answer could potentially be 0,
and there will always be at least one set of matching brackets 
in the string.
*/

// [a + b [8 (2*{(b^2)(c-9)})]]


// [[({()()})]]

/* 
)))(((()
*/

export const removeBrackets = (str) => {

    let list = []
    let count = 0

    if(str[0]===")" ) count = countClosing(str)
    let newStr = str.slice(count, str.length)
    for(let i = 0; i < newStr.length; i++){
        if(newStr[i] === "(" ){
            list.push(newStr[i])
        }else if(newStr[i] === ")" && list.length === 0){
            list.push(newStr[i])
        }else{
            list.pop()
        }
    }

    return list.length + count
}


const countClosing = (str) => {
    let count = 0

    for (let k = 0; k < str.length; k++) {
        if( str[k] === ")"  ){
            count++
        }else if(str[k] === "("){
            return count
        }
    }
}

