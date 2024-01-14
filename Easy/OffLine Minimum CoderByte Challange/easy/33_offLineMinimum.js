
export const offLineMin = (strArr) => {
  const [index, freqE] = E_Info(strArr);

  const numberArray = strArr.splice(0, index + 1).filter(char => char !== "E");

  return numberArray.sort((a, b) => a - b).splice(0, freqE).join(",");
};

function E_Info(strArr) {
  let index = "";
  let freq_E = 0;

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === "E") {
      index = i;
      freq_E += 1;
    }
  }

  return [index, freq_E];
}



/* 
Offline Minimum
Using the JavaScript language, ahave the function OffLineMinimum(strArr) take the
strArr parameter being passed which will be an array  of integers ranging from
1...n and the latter "E" and return the correct subset based on the following
rules. The input will be in the following format: ["I","I","E","I",...,"E",...,"I"] 
where the I's stand for integers and the E means take out the smallest integer
currently in the whole set. When finished, your program should return that new set
with integers separatedby commas. For example: if strArr is
["5","4","6","E","1","7","E","E","3","2"] then your program should return 4,1,5.
*/
