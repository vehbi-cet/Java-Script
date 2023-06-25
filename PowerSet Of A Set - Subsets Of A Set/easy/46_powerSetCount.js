/* 
Power Set: Power set P(S) of a set S is the set of all subsets of S.
For example S = {a, b, c} then
P(s) = {{}, {a}, {b}, {c}, {a,b}, {a, c}, {b, c}, {a, b, c}}.
If S has n elements in it then P(s) will have 2n elements
*/

/*
[1, 2, 3]

Binary Çözümlemesi 2^n n burda eleman sayısı 
Burada alt küme  sayısını binary ye yani 2 tabanına çeviriyoruz.
Sonra ise binary code içerisindeki yalnızca 1 olan değerlerin
indeksine göre bizim array imizi deki elemanları aynı indeksine göre 
alarak alt kümeleri oluşturuyoruz.


0 - 000 - Boş küme
1 - 001 - 3
2 - 010 - 2
3 - 011 - 23
4 - 100 - 1
5 - 101 - 13
6 - 110 -12
7 - 111 - 123

[1, 2, 3]
[0,0,0] Boş küme verir

[1, 2, 3]
[0,0,1] 3'ü verir

[1, 2, 3]
[0,1,0] 2 verir

[1, 2, 3]
[0,1,1] 23 verir

[1, 2, 3]
[1,0,0] 1 verir

[1, 2, 3]
[1,0,1] 13 verir

[1, 2, 3]
[1,1,0] 12 verir

[1, 2, 3]
[1,1,1] 123 verir


*/



export const powerset = (arr = []) => {

    const nOSS = 2**arr.length  /*Number of Sub Sets*/
    let result = [] /* Power Set, Güç Kümesi, Kuvvet Kümesi*/

    for (let i = 0; i < nOSS; i++) {
        let tempBinary = Number(i).toString(2)
        let currentBinary = "0".repeat(arr.length - tempBinary.length) + tempBinary

        let tempValue =""

        for (let j = 0; j < arr.length; j++) {
            if(currentBinary[j] === "1") tempValue += arr[j]
        }
        result.push(tempValue)
    }
    return result
}




/* 
1- tutorialspoint.com

const set = ['x', 'y', 'z'];
const powerSet = (arr = []) => {
    const res = [],
    const { length } = arr;
    const numberOfCombinations = 2 ** length;
    for (let combinationIndex = 0; combinationIndex < numberOfCombinations; combinationIndex += 1) {
        const subset = [];
        for (let setElementIndex = 0; setElementIndex < arr.length;
        setElementIndex += 1){
         if (combanationIndex & (1 << setElementIndex)) {
            subSet.push(arr[setElementIndex]);
          };
        };
        res.push(subset);
    }
    return res;
}
console.log(powerSet(set));

____________________________________________________________________________________________

2- stackoverflow

// nGenerate all array subsets
function* subsets(array, offset = 0){
    while (offset < array.length) {
        let first = array[offset++];
        for (let subset of subsets(array, offset)) {
            subset.push(first);
            yield subset;
        } 
    }
    yield [];
}

// Example:
for (let subset  of subsets([1, 2, 3])) {
    console.log(subset)
}
____________________________________________________________________________________________

3 - Geeks for geeks

function printPowerSet(set, set_size)
    {

         * set_size of power set of a set with set_size n is (2**n -1)

        var pow_set_size = parseInt(Math.pow(2, set_size));
        var counter, j;


          * Run from counter 000..0 to 111..1

        for (counter = 0; counter < pow_set_size; counter++)
        {
            for (j= 0; j < set_size; j++)
            {


                 *Check if jth bit in the counter is set If set then print jth element from set

                if ((counter & (1 << j)) > 0)
                    document.write(set[j]);
            }
            document.write("<br/>");
        } 
    }

    // Driver program to test printPowerSet
        let set = [ 'a', 'b', 'c' ];
        printPowerSet(set, 3);

________________________________________________________________________________________________

4- coderbyte öğrenci çözümü

function powerSet(arr) {

  // the final power set
  var powers = [];

  // the total number of sets that the power set will contain
  var total = Math.pow(2, arr.length);

  // loop through each value from 0 to 2^n
  for (var i = 0; i < total; i++) {

    // our set that we add to the power set
    var tempSet = [];

    // convert the integer to binary
    var num = i.toString(2);

    // pad the binary number so 1 becomes 001 for example
    while (num.length < arr.length) { num = '0' + num; }

    // build the set that matches the 1's in the binary number
    for (var b = 0; b < num.length; b++) {
        if (num[b] === '1') { tempSet.push(arr[b]); } 
    }

    // add this set to the final power set
    powers.push(tempSet);


  }

  return powers;

}

powerSet([1, 2, 3]);


*/