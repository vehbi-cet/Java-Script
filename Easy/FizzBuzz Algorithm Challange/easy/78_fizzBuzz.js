/* 
Fizz Buzz is a very simple programming task,
asked in software developer job interviews.

A typical round of Fizz Buzz can be:
Write a program that prints the n8umbers 
from 1to 100 and for multiples of '3'
print "Fizz" instead of the number and
for the multiples of '5' print "Buzz".

*/


export const fizzBuzz = (num) => {

        for (let i = 1; i < num; i++) {
            if(i % 15 === 0){
                console.log("FizzBuzz");
            }else if(i % 3 === 0) {
                console.log("Fizz");
            }else if(i % 5 === 0){
                console.log("Buzz");
            }else{
                console.log(i);
            }
        }
        
}
