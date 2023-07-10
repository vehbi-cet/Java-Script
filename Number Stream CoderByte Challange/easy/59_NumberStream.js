/* 
Have the function NumberStream(str) take the str parameter neing passed which will contain 
the numbers 2 through9, and deermine if there is a
a consecutive stream of digits of at least N length where N is the actual digit value.

If so return true, otherwise return false

For example: if str is "6539923335" then return true because 
there are 3 3's

[6,5,3,99,2,333,5]

[6,5,3,99,2,333,5]    33+3

let sonHane

arr[i][0] === arr[i].length



Example:
İnput = 5556293385563665
output false

input=5788888888233999
output: true because there are 8 8's in a row
*/

   export const numberStream = (str) => {

    let arr = [str[0]]

    for (let i = 1; i < str.length;i++) {
        
        let lastDigitOfLastItem = arr[arr.length-1][arr[arr.length-1].length-1]

        if(lastDigitOfLastItem === str[i]){
            let temp = arr[arr.length-1]
            arr.pop()
            arr.push(temp+str[i])
        }else if(str[i] != arr[arr.length-1]){
            arr.push(str[i])
        }

    }

    let result = false

    for(let j = 0; j < arr.length; j++){

        if(arr[j].length === Number(arr[j][0])) result = true
        

    }


    return result
} 

 /* export const numberStream = (str) => {
    let deger=false;
    let array = str.match(/(\d)\1+/g);
   if(array){
        for (let i = 0; i < array.length; i++) {
            array[i][0]==array[i].length?deger=true:null;    
        }
        return deger
    }else{ 
        return false;
    }
  };*/