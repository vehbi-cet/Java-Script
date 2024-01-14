export const arithGeo = (arr) => {

    let diff = arr[1] - arr[0]
    let ratio = arr[1] / arr[0]   
    let isArithmetic = true
    let isGeometric = true

    for(let i = 2; i < arr.length; i ++){
  
        if(arr[i] - arr[i-1] != diff){
            isArithmetic = false
        }
        
        if(arr[i] / arr[i-1] != ratio){
          isGeometric = false  
        } 

    }

    if(isArithmetic === true){
        return "Arithemtic"
    }else if(isGeometric === true){
        return "Geometric"
    }else{
        return -1
    }

}

/* 
Arith Geo

Using the JavaScript language, ahve the function ArithGeo(arr) take 
the array of numbers stroed in arr and return the string
"Arithmetic" if the sequence follows an arithmetic pattern or
return "Geometric" if it follow a geometric pattern. If the
sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the numbers is
 consistent, w here as in a geometric sequence, each term after the 
 first is multiplied by some constant or common ratio
 
 Arithmetic example: [2, 4, 6, 8] and

 Geometric example: [2, 6, 18, 54].


Negative numbers may be entered as
parameters, 0 will not be entered, and no array will contain all
the same elements

*/