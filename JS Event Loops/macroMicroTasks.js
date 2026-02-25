// Macrotasks and Microtasks Example:
console.log("Start");
Promise.resolve().then(() => console.log("Microtask 1"));
setTimeout(() => console.log("Macrotask"), 0);
console.log("End");