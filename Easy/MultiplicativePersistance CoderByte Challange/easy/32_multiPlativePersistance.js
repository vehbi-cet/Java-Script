
export const multiplicativePersistance = (num) => {
    let result = multiply(num)
    let multiplicativePersistance = 1

    if(result < 10) return 0

    while(result > 9){
        //console.log(result);
        multiplicativePersistance++
        result = multiply(result)
    }

    return multiplicativePersistance
}

const multiply = (num)=>{
    const numArr = num.toString().split('')
    let multiply = 1

    for (let i = 0; i < numArr.length; i++) {
        multiply *=numArr[i]
    }
    return multiply
}

/* 

Multipliactive Persistance
Rakamların birbirleri ile çarpımının tek rakam oluncaya kadar tekrarlanması
gereken çarpma işlemidir

Örneğin:

39--1--27--2--14--3--4
Yani
1- 3x9 = 27
2- 2x7 = 14
3- 1x4 = 4
*/