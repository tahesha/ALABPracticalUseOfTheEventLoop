// Step 1: Declare a global counter variable
let counter = 0;

// Step 2: Create a recursive function
function recursiveFunction() {
    counter++;
    recursiveFunction(); // Call itself recursively
}

//Step 3: Surround the initial function call in a try/catch block
try{
    recursiveFunction(); //Start the recursion
} catch (error) {

    //Step 4: Within the catch block, log the erro and the value of the counter variable
    console.error('Stack Overflow Error:', error);
    console.log('Counter Value:', counter);
}