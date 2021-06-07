// 00110001 00000000 00000000
// 00110001 00000001 00000001
// 00110011 00000001 00000010
// 01010001 00001011 00000010
// 00100010 00000010 00001000
// 01000011 00000001 00000000
// 01000001 00000001 00000001
// 00010000 00000010 00000000
// 01100010 00000000 00000000


/* 
1. Store the number 0 in memory location 0.
2. Store the number 1 in memory location 1.
3. Store the value of memory location 1 in memory location 2. 
4. Subtract the number 11 from the value in memory location 2.
5. If the value in memory location 2 is the number 0, continue with instruction 9.
6. Add the value of memory location 1 to memory location 0.
7. Add the number 1 to the value of memory location 1.
8. Continue with instruction 3.
9. Output the value of memory location 0.
 */

/*
Set "total" to 0.
Set "count" to 1.
[loop]
Set "compare" to "count". 
Subtract 11 from "compare". 
If "compare" is zero, continue at [end]. 
Add "count" to "total". 
Add 1 to "count". 
Continue at [loop]. 
[end]
Output "total".
*/

let total = 0, count = 1;
while (count <= 10) {
    total += count;
    count += 1;
}
console.log(total);
// --> 55


console.log(sum(range(1,10)));
// --> 55


function factorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return factorial(n-1) * n;
    }
}

console.log(factorial(8));
// --> 40320