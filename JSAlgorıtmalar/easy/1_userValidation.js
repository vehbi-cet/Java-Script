export const userValidation = (str) => {
     
     if(
        str.length >= 4 && str.length <= 25 &&
        (/[a-zA-Z]/).test(str.slice(0,1)) && // str.charAt(0)
        (/^\w+$/).test(str) &&
        (/[a-zA-Z0-9]/).test(str.slice(-1)) // str.charAt(str.langht-1)
     ) {
      return true
     }else{
        return false
     }


     //AMD Operator
     //.lenght property

     // Rag Exp
     // .charAt() .slice()
     //.test()

}


/* Rules

1. The Username is between 4 and 25 characters.
2. It must start width a letter.
3. It can only contein letters, numbers, and the underscore character.
4. It cannot end width an underscore character.

If the username is valid then your program should return the string true,
otherwiss return the string false


u__hello_world123


*/