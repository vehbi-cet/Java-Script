/* For this challenge you will be combining all of the elements 
in an array into a single number.

have the function ElementMerger(arr) take the array of positive integers
stored in arr and perform the following algorithm:
continuously get the difference of adjacent integers to create
a new array of integers, then do the same for the new array until
a single number is left and return that number.

For example: if arr is [4, 5, 1, 2, 7] then taking the difference of
each pair of elemnts produces the following new array: [1, 4, 1, 5]. 
Then do the same for this newa array 
to produce [3, 3, 4] -> [0, 1] -> 1.

So for this example your program should return the number1
because that is what's left at the end.





store the elements in a vector for easier manipulation
iterate and get the difference of adjacent elements
once we reach the eleemnt update our list by removing that element and r
End the loop once we have a single element
*/


export const ElementMerger = (arr) =>  {

    let newArr = mergeArr(arr)

    while(newArr.length > 1){
        console.log(newArr);

        newArr = mergeArr(newArr)
    }

    return arr[0]
}

const mergeArr = (arr) => {
    let subArr = []
    for(let i = 1 ; i < arr.length; i++){
        subArr.push(Math.abs(arr[i]-arr[i-1])) 
    }
    return subArr
}