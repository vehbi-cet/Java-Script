export const letterCount = (str) => {

    // 1 harf dışındaki ve boşluk dışındaki karakterlerin silinmesi
    // 2 stringin küçük harfe dönüştürülmesi
    // 3 stringi array haline getir

    const arr = str.replace(/[^a-zA-Z ]/g,"").toLowerCase().split(" ")

    let kelimeNesneleri = []

    for (let i = 0; i < arr.length; i++) {

        let obj={}
        
        
        arr[i].split('').forEach(char => {
            char in obj ? obj[char] += 1 : obj[char] = 1

        })
        kelimeNesneleri.push(obj)

    }

    let maxFrequencies = []

    kelimeNesneleri.forEach( (nesne)=>{
        maxFrequencies.push(Math.max(...Object.values(nesne)))
    })

    let maxValue = Math.max(...maxFrequencies)

    //console.log(maxValue);

    return maxValue < 2 ? -1 :
    (arr[maxFrequencies.indexOf(maxValue)]
    ? arr[maxFrequencies.indexOf(maxValue)] : -1 )



}


/* 
 Letter Count
Have the function LetterCountI(str) take the str parameter
being passed and return the first word with the greatest number
of repeated letters.

For example: " Today, is the greatest day ever!" should return
greatest beacuse it has 2 e's (and 2 t's) and it comes before 
ever which also has 2 e's.

If there are no words with repeating letters return <b>-1</b>.

Words will be separated by spaces 
*/