export const arrayAddition = (arr) => {

    //3.yöntem
    const maxValue = Math.max(...arr)
    let sum = 0

    for(let i = 0; i<arr.length; i++){
        sum += arr[i]
    }


    return sum / 2 === maxValue ? true : false
    
    /*2.yöntem

    arr.sort((a,b) => a-b)
    let sum = 0

    const maxValue = arr[arr.length-1] 

    for(let i = 0; i <arr.length-1;i++){
        sum += arr[i]
    }

    return maxValue === sum ? true : false
    */

   /* 1.Yöntem
    const newArr = [...arr]
    let sum = 0
    const maxValue = Math.max(...arr)

    newArr.splice(arr.indexOf(maxValue),1)

    for(let i = 0; i<newArr.length;i++){
        sum += newArr[i]
    }

    return maxValue === sum ? true : false
    */
}

 /* 
Array Addition
Using the JavaScript language, have the function 
ArrayAdditionI(arr) take the array of numbers stored in 
arr and return the string true if any combination of
numbers in the array can be added up to equal  
the largest number in the array, otherwise return the string false.
For example: if arr contains [4, 6, 23, 10, 1, 3] the output should
  return false because 4 + 6 + 10 + 3 + 1 != 23(24)
  The array will not be empty, will not contain  
  all the same elements, and my contain negative numbers.  
 */