export const changingSequence = (arr) =>{
    let newArr=[]
    let tendency = "increasing"

    for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i] - arr[i-1])
    }

    if(newArr[0] < 0) tendency = "decreasing"

    if(tendency === "increasing"){
        for (let i = 0; i < arr.length; i++) {
            if(newArr[i] < 1) return i
        }
    }

    if(tendency === "decreasing"){
        for (let i = 0; i < arr.length; i++) {
            if(newArr[i] > 0) return i
        }
    }


    return -1
}

/* 
This challenge requires you to determine at what index in array
the sequence changes from increasing to decreasing or vice versa.

For example, if the array were [1, 2, 4, 6, 4, 3, 1] then
your program should return 3 because at index 3 the sequence
beings to change from increasing to decreasing.

If there is no change in sequence, then your program should return -1.


*/