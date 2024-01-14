
/* 
Have the function ScaleBalancing(strArr) read strArr which will contain two elements, the first being the two positive integer weights on a balance scale (left and right sides) and the second element being a list of avaible weights as positive integers. Your goal is to determine if you can balance the scale by using the least amount of weights from the list, but using at most only 2 weights

For example: if strArr is ["[5, 9]", "[1, 2, 6, 7]"] then this means there is a balance

scale with a weight of 5 on the left side and 9 on the right side. It is in fact possible to balance this scale by adding a 6 to the left side from the list of weights and adding a 2 to the right side. Both scales will now equal 11 and they are perfectly balanced. Your program should return a comma separated strin of the weights that were used from the list in ascending order, so for this example your program should return the string 2,6


There will only ever be one unique solution and the list of avabile weights will not be empty. It is also possible to add two weights to only one side of the scale to balance it. If it is not possible to balance the scale then your program should return the string not possible.


Sample Test Cases:
Input:["[3, 4]", "[1, 2, 7, 7]"]
Output:"1"
Input:["[13, 4]", "[1, 2, 3, 6, 14]"]
Output:"3,6"
*/

export const ScaleBalancing = (arr) => {

    const [l,r] = returnNumerals(arr[0])

    const availableWeights = returnNumerals(arr[1])
    availableWeights.sort((a,b)=>a-b)

    const difference = Math.abs(l -r)

    // 1. senaryo, çözüm kümesi içerisindeki değerlerden birirnin küfeler arasındaki farka eşit olması
    if(availableWeights.indexOf(difference) > -1) return difference

    // 2.Senaryo farka, array içerisindeki iki değerin toplanması ile ulaşılması

    let leftIndex = 0;
    let rightIndex = availableWeights.length-1
    let countDown = 1
    let result = ""

    while (leftIndex < rightIndex && countDown > 0) {

        let sum = availableWeights[leftIndex] + availableWeights[rightIndex]

        if (sum > difference) {
            rightIndex--
        } else if(sum < difference){
            leftIndex++
        }else{
            result = availableWeights[leftIndex] +","+ availableWeights[rightIndex]
            countDown--
        }
    }

    if(result != "") return result

    // 3. Senaryo, farka çözüm kümesi içerisindeki değerleri birbirinden çıkartarak ulaşmak

    for(let i = availableWeights.length-1; i > 0;i--){
        for (let j = 0; j < i ; j++) {
            if(availableWeights[i] - availableWeights[j] === difference) result =
            availableWeights[i] + "," + availableWeights[j]
        }
    }

    if(result != ""){
        return result
    }else{
        return "Not Possible"
    }


}
function returnNumerals (str){
    let numerals = []
    str.match(/\d+/g).forEach(element => {
        numerals.push(Number(element))
    });
    return numerals
}