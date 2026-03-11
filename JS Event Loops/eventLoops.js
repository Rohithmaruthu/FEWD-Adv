// intro:
// Javascript is a single-threaded language, which means it can only execute one task at a time.
// However, it can handle asynchronous operations using an event loop, which allows it to perform non-blocking tasks.

// JS Order of execution:
    // 1. Synchronous code
    // 2. Asynchronous code:
        // a) microtasks - (promises)
        // b) macrotasks - (setTimeout, setInterval, etc.)
    //
//

// synchronous code example:
console.log("This is synchronous code.");
console.log("It executes in order.");

// asynchronous code example:
setTimeout(()=> {
    console.log("This is asynchronous code.");
}, 1000)

console.log("This will execute before the asynchronous code.");

// other example of asynchronous code:
// 1. Simulating an API call with a callback function
// 2. Using Promises to handle asynchronous operations

// Simulating an API call with a callback function
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "John", age: 30}
        callback(data);
    }, 2000
)
}

fetchData((data) => {
    console.log("Data received from API:", data);
})

