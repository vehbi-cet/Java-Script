


 export const SimpleSymbols = (str) => {

    const arr = str.split('')
    let controlArr = []

    arr.forEach(char => {
        if((/[a-zA-Z]/).test(char)){
            if(arr[arr.indexOf(char)-1] === "+" && arr[arr.indexOf(char)+1]==="+"){
                controlArr.push(1)
            }else{
                controlArr.push(0)
            }
        }
    });

    if(controlArr.includes(0)){
        return false
    }else{
        return true
    }
 }





/*
function SimpleSymbols(str){
    var arr = str.toLowerCase().split("");
    for (var i = 0; i < arr.length; i++){
    if(arr[i] >= "a" && arr[i] <= "z") {
      if (i === 0 || i === arr.length) {
        return false;
      }
    }
  }

  return true;
  
}
  /* Sİmple Symbols

  Using the JavaScript languge, have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false

 The str parameter will be compesed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol.

 so the string to the left would be false.

 The string will not be empty and willhave at least one letter.
 
 */