
export const thirdGreatest = (arr) => {

    arr.sort((a,b)=> b.length - a.length)

    return arr[2]

    /*
    
    function ThirdGreatest(strArr) {
    longest = '';    
    second = '';    
    third = '';
    for (idx in strArr) {
        current = strArr[idx];
        if (current.length > longest.length) {
        third = second;
        second = longest;
        longest = current;
        } else if (current.length > second.length){
        third = second;
        second = current;  
        } else if (current.length > third.length){
        third = current;    
        }
    }    
    return third;    
    }

    */

}

/* 

Third Greatest
Using the JavaScript language, have the function ThirdGreatest(strArr) take the
array of strings stored in strArr and return the third largest word within in.

So for example:
if strArr is ["hello", "world", "before", "all"] your outpur should 
be world becuse "before" is 6 letters long, and "hello" and "world" are both 5,
but the output should be world because it appeared as the last 5 letter word in 
the array.

If strArr was ["hello", "world", "after", "all"] the output should be
after because teh first three words are all 5 letters long, so return the last one.
The array will have at least three strings and each string will only contain    
letters.

*/