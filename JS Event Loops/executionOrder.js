console.log("Start");
Promise.resolve().then(() => console.log("MicroTask"));
setTimeout(() => console.log("macroTask"), 0);
console.log("End");

// Start
// End
// Microtask
// Macrotask

// Even though setTimeout is 0ms — it still goes after the Promise.