/*Using the JavaScript language, ahev the function StringScramble(str1,str2) 
take both parameters being passed and return the string true if a portion of str1
characters can be rearranged to match str2, otherwise return the dtring false. For example: if str1 is "rkqodlw"
and str2 is "world" the output should return true. Punctuation and symbols will not be entered with the parameters.  */

export const stringscramble = (s1, s2) => {

    let result = true

    for(let i = 0; i < s2.length; i++){
        if(s1.indexOf(s2[i])===-1) result = false 
    }
    return result
}

