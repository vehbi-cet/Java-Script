/* For this challenge you will determine the area of a rectangle. 
have the function RectangleArea(strArr) take the array of strings stroed
in strArr, which will only contain 4 elements and be in the form (x y)
where x and y are both integers, and return the area of the rectangle
formed by the 4 points on a cartesian grid. The 4 elements will be in 
arbtirary order.

For example: if strArr is ["(0 0)", "(3 0)", "(0 2)", "(3 2)]
then your should return 6 becausethe width of the rectangle
is 3 and the height is 2 and the area of a rectangle is equal to the
width * height.

*/


export const rectangleArea = (arr) => {

    const x1 = arr[0][1]
    const y1 = arr[0][3]

    const x2 = arr[1][1]
    const y2 = arr[1][3]

    const x3 = arr[2][1]
    const y3 = arr[2][3]


    return Math.abs((x1*y2+x2*y3+x3*y1)-(y1*x2+y2*x3+y3*x1))
}

