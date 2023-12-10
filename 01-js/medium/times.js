/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let sum=0;
    const startDate = new Date();
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    const endDate = new Date();

    const timeDifference = endDate - startDate;
    return timeDifference;
}

console.log(calculateTime(100));       // Run for n = 100
console.log(calculateTime(100000));    // Run for n = 100000
console.log(calculateTime(10000000000)); // Run for n = 1000000000