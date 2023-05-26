export const divisonStringfied = (n1, n2) => {
//2.çözüm

    return Math.floor(n1/n2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")


/*  1.çözüm

    const divison = Math.floor(n1/n2).toString()
    if(divison.length < 4) return divison

    const divisonArr = divison.split('')
    const backwordsArr = divison.split('').reverse()

    let arr = []
    let j = 0

    for (let i = 0; i < backwordsArr.length; i++){c 

        if(j != 0 && j % 3 === 0){
            arr.push(backwordsArr[i]+",")
        }else{
            arr.push(backwordsArr[i])
        }

        j++


    } 

    return arr.reverse().join("") */
}


/* 
Divison Stringified
Using the JvaScript language,
have the function DivisonStringified(num1,num2)
take both parameters being passed, divide num1 by num2,
and return the results as a string with properly formatted commas.
If an answer is only 3 digitis long,
return the number with no commas (ie. 2/3 should output "1")    

For example:
if num1 is 123456789 and num2 is 10000 the output should be"12,345"

*/