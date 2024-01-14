export const waveSorting = (arr) => {

    const sortedArr = arr.sort ((a,b) => a-b)

    let newArr=[]

    for(let i = 1; i < sortedArr.length; i+=2){

        newArr.push(sortedArr[i]) //sortedArr[i+1]
        newArr.push(sortedArr[i-1]) //sortedArr[i]

    }

    if(sortedArr.length % 2 != 0) newArr.push(sortedArr[sortedArr.length-1])

    return newArr

}






/*Have the function WaweSorting(arr) take the array of positive 
integers stored in arr and return the string true if the numbers 
can be arranged in a wave pattern: a1 > a2 < a3 > a4 < a5 > ...,
otherwşise return the string false.

For example, if arr is: [3, 6, 5,  10, 20, 7], then a
possible wave ordering of the numbers is: [5, 3, 7, 6, 20, 10].

5 > 3 < 7 > 6 < 20 > 10

So for this input your program should return the string true.
-The input array will always contain at least 2 elements.
-Array will have even numbers of element
-The array Will contain unique numbers. Big - small is makes a wave 
*/

/* 

[1,2,2,1,2,1,1,1,1,2,2,2,33,66,66,5,5,5,5,5,9,9]

*/