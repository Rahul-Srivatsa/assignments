## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second

```javascript

let counter = 0;

// Using setInterval to increment the counter every second
const intervalId = setInterval(() => {
    counter++;
    console.log(counter);

    // Stop the counter after it reaches 10
    if (counter === 10) {
        clearInterval(intervalId);
    }
}, 1000);

```