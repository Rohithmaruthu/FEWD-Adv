const deliveryPromise = new Promise((resolve, reject) => {
    const isRestaurantOpen = false; // Change to false to test rejection

    setTimeout(() => {
        if (isRestaurantOpen) {
            resolve("Order delvered successfully!");
        } else {
            reject("Restraurant is closed.");
        }
    }, 2000);
})

// Handling the promise with then and catch
deliveryPromise.then(message => console.log(message)).catch(error => console.log(error));