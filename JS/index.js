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


//Part 2

//Step 1: Write a Recursive function to Flatten an Array
function flattenArray(arr) {
    let flattened = [];

    arr.forEach(element => {
        if (Array.isArray(element)) {
            flattened.push(...flattenArray(element)); // Recursively flatten nested arrays
        } else {
            flattened.push(element); // Add non-array elements to the flattened array
        }
    });

    return flattened;
}
function trampoline(fn) {
    return function(...args) {
        let result = fn(...args);
        while (typeof result === 'function') {
            result = result();
        }
        return result;
    }
}

const trampolineFlattenArray = trampoline(function flattenArray(arr, result = []) {
    arr.forEach(element => {
        if (Array.isArray(element)) {
            return () => flattenArray(element, result); // Return a function to be called recursively
        } else {
            result.push(element); // Add non-array elements to the result array
        }
    });
    return result;
});

//Step 2: Implement Trampolining
function trampoline(fn) {
    return function(...args) {
        let result = fn(...args);
        while (typeof result === 'function') {
            result = result();
        }
        return result;
    }
}

const trampolineFlattenArray = trampoline(function flattenArray(arr, result = []) {
    arr.forEach(element => {
        if (Array.isArray(element)) {
            return () => flattenArray(element, result); // Return a function to be called recursively
        } else {
            result.push(element); // Add non-array elements to the result array
        }
    });
    return result;
});

//Time to TEST IT OUT!!!
//Step 3: Test the Functions
const nestedArray = [1, [2, [3, 4]], [5, 6]];
console.log("Original Array:", nestedArray);
console.log("Flattened Array (Recursive):", flattenArray(nestedArray));
console.log("Flattened Array (Trampolined):", trampolineFlattenArray(nestedArray));
