
export const LetterCapitalize = (str)=>{

    let newStr = []
    str.split(' ').forEach((word)=>{
        newStr.push(word.charAt(0).toUpperCase() + word.slice(1, word.length).replace(/[^a-zA-Z ]/g, "" ))
    })
    return newStr.join(' ')




}










/*
Letter Capitalize
Using the JavaScript language, hav the function LetterCapitalize(str) take the str parameter being passed and capitalize the firsst letter of each word

words will be separated by only one space.
*/