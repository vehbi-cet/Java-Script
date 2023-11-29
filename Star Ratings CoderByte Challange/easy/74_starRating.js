// For this challenge  you will be calculating how to display a 5 star rating.
/* 
have the funstion StarRating(str) take the str parameter being passed
 which will be an average rating between 0.00 and 5.00, and convert
 this rating into a list of 5 image names to be displayed in a user
 interface to represent the rating as a list of stars and half stars.
 Ratings should be rounded up to the nearast half. There are 3 image
 file names avabile: "full.jpg", "hald.jpg", "empty.jpg".
 The output will be the name of the 5 images (without the extension),
 from left to right, separated by spaces.

 For example: if str is "2.36" then this should be displayed by the
 following image:
So your program should return the string
"full full half empty empty"
*/


export const starRating = (str) => {
    let [integer, decimal] = str.split('.')
    let int = Number(integer)
    let dec = Number(decimal)

    if(dec > 0 && dec <= 50){
        dec = 1
    }else if (dec > 50){
        dec = 0
        int++
    }


    return "full ".repeat(int) + "half ".repeat(dec) + "empty ".repeat(5-int-dec)
}