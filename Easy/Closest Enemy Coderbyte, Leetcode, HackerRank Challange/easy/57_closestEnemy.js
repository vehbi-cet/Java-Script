/* 
Have the function ClosestEnemy(arr) take the array of numbers
stored in arr and from the position in the array where a 1 is,
return the number of spaces either left or right you must
move to reach an enemy which is representd by a 2.

For example:

if arr is [0, 0, 1, 0, 0, 2, 0, 2]

then your program should return 3 because the closest enemy (2)
is 3 spaces away from the 1.

The array will contain any number of 0's and 2's
but only a single 1. It may contain any 2's at all as well,
where in that case your program should return a 0.


*/

export const ClosestEnemy = (arr) => {

    let indexOf1 = arr.indexOf(1)
    let indexesOf2 = []
    let differences = []

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 2) indexesOf2.push(i)
    }

    if(indexesOf2.length === 0) return 0

    indexesOf2.forEach((element)=>{
        differences.push(Math.abs(element - indexOf1))
    })

    return Math.min(...differences)

}