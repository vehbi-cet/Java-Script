export const findIntersection = (arr) => {

    //1- Yeni bir array tipinde değişken tanımla
    let intersection =[]
    //2- split(), replace()
    const kume1 = arr[0].replace(/\s/g,"").split(',')
    const kume2 = arr[1].replace(/\s/g,"").split(',') 
    //3- forEach() kullanarak bütün array içerisinde olup olmadığını kontrol edicez. Varsa tanımladığımız yeni array değişkeni içerisine bu değeri koyucaz
  
      kume2.forEach((item)=>{
        if(kume1.includes(item)){
            intersection.push(item)
        }
      })
    //4- eğer tanımlamış olduğumuz array boşsa return false boş değilse de array içerisindeki değerleri string halinde return edicez.

        if(intersection.length !=0){
            return intersection.toString()
        }else{
            return false
        }
}//["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]

/* 
Have the function FindInterSection(strArr) read the array of string stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will repserent a second list of comma-separated numbers (also sorted). Your goal is return a comma-separated string contatining the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the dtring false.

*/