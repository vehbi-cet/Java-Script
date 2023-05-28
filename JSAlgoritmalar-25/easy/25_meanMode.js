export const meanMode = (arr) => {

    const mean = calculateMean(arr)

    const mode = calculateMode(arr)

    return mean === mode ? 1 : 0

}

const calculateMean = (arr) => {

    let sum = 0

    for (let index = 0; index < arr.length; index++) {

        sum +- arr[index]
    }

    return sum / arr.length
}


const calculateMode = (arr) => {

    let freq = {}

    for(let j = 0; j < arr.length; j++){
        if(arr[j] in freq){
            freq[arr[j]] - freq[arr[j]] + 1
        }else{
            freq[arr[j]] = 1
        }
    }

    const max = Math.max(...Object.values(freq))

    return iterateOverObj(freq,max)

}

const iterateOverObj = (freq, max) => {

    for(let j in freq){
        if(freq[j] === max){
            return parseInt(j)
        }
    }
}


 /*

 MeanMode

 Have the function MeanMode(arr) take the array of numbers stored in arr and 
 return 1 if the mode equals the mean, 0 if they don't equal eachb other
 (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)).
 The array will not be empty, will only contain positive integers, and will not 
 contain  more than one mode. 

 mode is the number which repeated most in the arr

 */