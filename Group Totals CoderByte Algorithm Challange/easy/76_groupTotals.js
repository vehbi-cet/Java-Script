// For this challenge you will be adding values from key, value pairs.
/* 
have the function GroupTotals(strArr) read in the strArr parameter
 containing key:value pairs where the key is a string and
 the value is an integer. Your program should return a string
 with new key:value pairs separated by a comma such that each 
 key aperas only once with the total values summed up.

For example: if strArr is ["B:-1", "A:1", "B:3", "A:5"] then 
your program should return the string A:6,B:2.

Your final output string should return the keys in alphabetical order.
Exclude keys that have a value of 0 after being summed up.
*/



export const groupTotals = (arr) => {
    let obj = {}

    for (let i = 0; i < arr.length;i++) {
        if(arr[i][0] in obj){
            obj[arr[i].split(':')[0]] += Number(arr[i].split(':')[1])
        }else{
            obj[arr[i].split(':')[0]] = Number(arr[i].split(':')[1])
        }
    }

    let result = []

    for(let key in obj){
        result.push(key + ":" + obj[key])
    }

    return result.sort()

}