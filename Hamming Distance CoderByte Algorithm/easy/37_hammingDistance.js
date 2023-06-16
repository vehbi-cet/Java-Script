export const hammingDistance = (p1, p2) => {
    let hamm = 0
    for(let i = 0; i < p1.length; i++){
        if(p1[i] != p2[i]) hamm += 1
    }

    return hamm
}


/* 

Hmamming Distance is the number of different characters 
in a string or number with the same length.

11011001
10011101
You should return 2

"karolin" and "kathrin" is 3.
"karolin" and "kerstin" is 3.
"kathrin" and "kerstin" is 4.
0000 and 1111 is 4.
2173896 and 2233796 is 3.
*/