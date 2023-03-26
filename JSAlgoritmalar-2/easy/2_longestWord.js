export const longestWord = (sen) => {

    
const arr = sen.replace (/[^a-zA-Z ]/g, "").split(" ")

arr.sort((a, b)=>{return b.length - a.length})

return arr[0]



}


/*
Longest
Word

- Using the JavaScript languge, have to funciton LongestWord(sen) take the sen parameter being passed and return the largest word in the string

- If there  are two or more words that are the same length, return the first word from the string width that lenght

- Ignore puncututaion and assume sen will not be empty

*/