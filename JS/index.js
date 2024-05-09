// Step 1: Declare a global counter variable
let counter = 0;

// Step 2: Create a recursive function
function recursiveFunction() {
    counter++;
    recursiveFunction(); // Call itself recursively
}