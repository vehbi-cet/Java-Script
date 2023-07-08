/* 
You must create a function that can read matrix of numbers stored 
in an array which will be a 2D matrix that contains only
the integers 1, 0, or 2.
Then from the position in the matrix where a 1 is,
return the number of spaces either left, right, down, or up
you must move to reach an enemy which is represented by a 2.


You are able to wrap around on side of the matrix to the other.
For example if array is ["0000", "1000", "0002", "0002"]
then this is the board:

0 0 0 0  
1 0 0 0 
0 0 0 2
0 0 0 2


For tis board your program should return 2 because
the closest enemy (2) is 2 spaces away from the 1 
by moving left to wrap to other side and then moving down once.
The array will contain any numbers of 0's and 2's,
but only a single 1. It may not contain any 2's at all as well,
where in that case your program should return a 0.
*/

export const closestEnemy = (arr) => {

    let coordinate1 = []
    let coordinate2 = []
    let yDif = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if(arr[i][j] === "1") coordinate1.push([i,j])
            if(arr[i][j] === "2") coordinate2.push([i,j])

        }
    }

    if(coordinate2.length === 0) return 0

    coordinate2.forEach(elem => yDif.push(Math.abs(coordinate1[0][0]-elem[0])))
    let indexOfClosestDif = yDif.indexOf(Math.min(...yDif))

    let leftMove = Math.abs(coordinate1[0][1]+1 + coordinate2[indexOfClosestDif][1]-arr[0].length-1)
    let rightMove = Math.abs(coordinate1[0][1] - coordinate2[indexOfClosestDif][1])


    let yMove;

    if(leftMove > rightMove){
        yMove = rightMove
    }else if (leftMove < rightMove){
        yMove = leftMove
    }else if (leftMove === rightMove){
        yMove = leftMove // yMove = rightMove
    }

    return yMove + Math.min(...yDif)
}