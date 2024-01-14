/* 
Voval Square

Have the function VowelSquare(strArr) take the strArr parameter being passed
which will be a 2D matrix of some arbitary size filled with letters from the alphabet,
and determine if a 2x2 square composed entirely of vowels exists in the matrix.
For example: strArr is ["abcd", "eikr", "oufj"]
then this matrix looks like the following:

a b c d

e i k r

o u f j

Within this matrix there is a 2x2 square of vowels starting 
in the second row and first column, namely, ei, ou.

If a 2x2 square of vowels is found your program should return the top-left position
(row-column) of the square, so for this example
your program should return 1-0
If no 2x2 square of vowels exists,
then return the string not found.
If there are multiple squares of vowals,
return the one that is at the most top-left position in the whole matrix.

The input matrix will at least be of size 2x2

Examples

Input: ["aqrst", "ukaei", "ffooo"]

Output: 1-2

Input: [ "gg", "ff"]

Output: not found


def VowelSquare(arr):
  check = []
  vowel = ['a','e','i','o','u']

  for i in range(len(arr)-1):
    for j in range (len(arr[i])-1):
      if arr[i][j] in vowel and arr[i+1][j] in vowel and arr[i+1][j+1] in vowel:
        check.append(str((i,j)).replace(' ','').replace(',','-').strip('()'))

  if not chwck:  
    print('not found)
  else:  
    print(check[0])

VowelSquare(input())
*/


export const VowelSquare = (arr) => {

  for(let i = 0; i < arr.length-1; i++){
    for(let j = 0;j < arr[0].length-1;j++){

      if((/[aeiou]/).test(arr[i][j])){
        if((/[aeiou]/).test(arr[i][j+1])){
          if((/[aeiou]/).test(arr[i+1][j])){
            if((/[aeiou]/).test(arr[i+1][j+1])){
                return i+","+j
            }
          }
        }
      }
    }
  }

return "Not Found"
}

