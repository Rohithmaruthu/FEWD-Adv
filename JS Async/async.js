// This code demonstrates a synchronous heavy calculation that blocks the main thread.
console.log("Synchronous Code Example:");
console.log("Task 1: Start");

function heavyCalculation() {
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
        sum += i;
    }
    return sum;
}

console.log("Task 2: Performing heavy calculation...");
const result = heavyCalculation();
console.log("Task 3: Calculation Complete --> ", result);
console.log("Task 4: End");

// This code demonstrates how asynchronous code can prevent blocking the main thread.
console.log("\nAsynchronous Code Example:");
console.log("Task 1: Start");
setTimeout(() => console.log("Task 2: Async operation complete"), 2000);
console.log("Task 3: Main thread continues...");
console.log("Task 4: End");


// example that combines everything:
console.log("\nCombined Example:");
console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");
