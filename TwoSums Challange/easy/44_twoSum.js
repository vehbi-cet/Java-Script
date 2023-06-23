export const twoSum = (nums, target) => {

    let returnValue = ""

    if(nums.length === 2 && nums[0] + nums[1] ===target) returnValue = [0,1]

    for(let i = 0; i < nums.length; i++){
        let temp1 = nums[1]

        const nums_ = nums.filter(item => item != temp1)

        for(let j = 0; j < nums_.length; j++){
            if(temp1 + nums_[j] === target) return "["+i+","+(j+1)+"]"
        }
    }

    return returnValue === "" ? false : returnValue

}

/* Leet Code
Give an array of integers nums and an integer target,
return indices of the two numbers such that they add up to target. 

You may assume that each input would have exactly one solution,
and you may not use the same element twice.

You can return the answer in any order.



Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], tagret = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

*/