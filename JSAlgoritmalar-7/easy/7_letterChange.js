export const letterChange = (str) => {

     // 1 - js charcode ve charcodeAt metotlarını kullanacağımıoz için  ilk önce string içerisindeki harfleri toLowerCase metodu ile küçük harfe çeviriyoruz.
     const newS = str.replace(/[^a-zA-Z ]/g, "")

    let newStr =  str.toLowerCase().replace(/[a-z]/gi, (char)=>{
        if(char === "z"){
            return"a"
        }else{
            return String.fromCharCode(char.charCodeAt() + 1)
        }
    })


     // 2 - replace metodu ile harfleri tarıyoruz ve ilk olarak eğer Z harfi varsa bu değeri hemen A harfi ile değiştiriyoruz. Eğer harfimiz Z değilse String.fromCode ve char.charcodeAt() kullanarak alfabedeki bir sonraki harf ile bu değeri  değiştiryoruz.

     let vowelCapitalize =  newStr.replace(/a|e|i|o|u/gi, char => char.toUpperCase() ).replace(/[^a-zA-Z ]/g, "" )
     
     // 3 - Son olarak da sesli harfleri büyük harf haline getiriyoruz ve değeri return ediyoruz.

     return vowelCapitalize 




}



/*
Using the JavaScript, have the function letterChanges(str) take the str parameter being passed and modify it using the following algorithm.

1 - Replace every letter in the string with the letter following it in the alphabet (ie. c becomes s, z becomes a).

2 - Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.

*/