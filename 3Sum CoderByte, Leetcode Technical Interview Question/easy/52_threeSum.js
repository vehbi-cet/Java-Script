/* 
  Have the function ThreeSum(arr) take the array of integers stored in arr,
  and determine if any three distinct numbers (excluding the first element)

  in the array can sum up to the first element in the array.


 For example
 if arr is [8, 2, 1, 4, 10, 5, -1, -1] then
 there are actually three sets of triplates
 that sum to the number 8: [2, 1, 5], [4, 5, 1] and [10, -1, -1].

 Your program should return the string true 
 if 3 distinct elements sm to the first element,
 otherwise your program should return the the string false.
 The input array will always contain at least 4 elements.

 example 2:
 [-1,0,1,2,-1,4]
 output=[[-1,-1,2],[-1,0,1]]

*/

export const threeSum = (arr,target) => {

    // Sort in ascending order
    arr.sort((a, b) => a - b)
    let subSets = []

    for(let i = 0; i<arr.length-2; i++){

        if(arr[i] != arr[i-1]){
            let left = i+1
            let right = arr.length-1

            while (left < right) {

                let currentSum = arr[i] + arr[left] + arr[right]

                if(currentSum > target){
                    right--
                }else if(currentSum < target){
                    left++
                }else if(currentSum === target){
                    subSets.push([arr[i], arr[left], arr[right]])
                    while(arr[left]===arr[left+1]) left++
                    while(arr[right]===arr[right-1]) right --
                    left++
                    right--
                }

            }
        }
    }


    return subSets
}

