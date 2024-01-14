/* 
    Given an array of integers that is already sorted in ascending order,
    find two numbers such that they add up to a specific target number.

    Your function should return  the indices of the numbers.
    Index1 must be less then Index2

    Each input has only one solution 
    You can not use the same number twice

    Example:
    NumberArray=[1, 3, 4, 7, 10, 11]
    Target= 9
    Your Function Should Return [2, 3]
*/
export const twoSum2 = (numArr,target) => {

    //Sort Array Ascending Order
    numArr.sort((a,b)=>a-b)

    let left = 0
    let right = numArr.length-1

    while (left < right) {
        let currentSum = numArr[left] + numArr[right]

        if(currentSum > target){
            right--
        }else if(currentSum < target){
            left++
        }else{
            return [left,right]
        }


    }
}