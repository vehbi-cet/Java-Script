/* 
Input : I got intern at google
Output : IGotInternAtGoogle

Input : Here comes the rain
Output : HereComesTheRain

*/

export const camelCase = (str) => {

    let arr = str.split(' ')

    let camelC = ""

    arr.forEach(word => {
        let firstLetter = word[0].toUpperCase()
        let restOfTheWorld = word.substring(1)
        let newWord = firstLetter + restOfTheWorld
        camelC += newWord 

    })

    return camelC
}