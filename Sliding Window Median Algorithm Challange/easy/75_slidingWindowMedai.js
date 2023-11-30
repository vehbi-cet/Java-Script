/* 
You are given an integer array nums and integer k.
There is a sliding window of size k which is moving
from tehe very left of the array to the very right.
You can only see the k numbers in the window.
Each time the sliding window moves right by one position.

For example: if arr is [1, 3,-1,-3, 5, 3, 6, 7] then your program 

Window position               Median
----------------             --------
[1 3 -1] -3 5 3 6 7              1           1 3 -1 -3 -> -3 -1 1 3    0
1 [3 -1 -3] 5 3 6 7             -1
1 3 [-1 -3 5] 3 6 7             -1
1 3 -1 [-3 5 3] 6 7              3
1 3 -1 -3 [5 3 6] 7              5
1 3 -1 -3 5 [3 6 7]              6   


should return "1, -1, -1, 3, 5, 6"

Sizin Alıştırmanız eğer k çift sayı ise ona göre koda uyarlama yapmak.
*/


export const slidingWindowMedain = (arr,k) => {
    let median = []
    
    for (let i = 0; i < arr.length-(k-1); i++){
        median.push(arr.slice(i,i+k).sort((a,b)=> a-b)[1])
    }


    return median.join(', ')
}