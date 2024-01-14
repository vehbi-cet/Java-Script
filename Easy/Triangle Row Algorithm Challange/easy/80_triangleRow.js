// For this challenge you will be adding up a whole row from
/*  have the function TriangleRow(num) take  
num which will be a positive integer represeting
some row from Pascal's triangle. Pascal's triangle
starts with a [1] at the 0th row of the triangle.

Then the first row is [1, 1] and the second row is
[1, 2, 1]. The next row begins with 1 and ends with 1,
and the inside of the row is determined by adding the
k-1 and kth elements from the previous row.

The next row in the triangle would then he [1, 3, 3, 1],
and so on.
The input will be some positive integer and your goal is
to return the sum of the row.

For example: if num is 4 then your program should return 
teh sum 1 + 4 + 6 + 4 + 1 which is 16.

*/

export const triangleRow = (num) => {

    return Math.pow(2, num) 
}
