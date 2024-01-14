/* 
    1- return the max values of the arrays in the given array so the sum of the 
    digits would be highest

    [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]

    2- Have the function largest four (arr) take the array of integers stored 
     in arr and find the four largest elements and return their sum.  

    for example: arr is [4,5,-2,3,1,2,6,6] then the four largest elements in this 
    is 6,6,4,5 total sum is 21?
*/


export const fourLargest = (arr) => {

    let arrMax = []

    arr.forEach(subArr => arrMax.push(Math.max(...subArr)))

    return arrMax

}