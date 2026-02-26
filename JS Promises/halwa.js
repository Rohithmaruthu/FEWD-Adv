isHalwaThere = true;
function waitInQueue() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (isHalwaThere) {
                resolve("Buy 1/2 kg of halwa");
            } else {
                reject("Halwa sold out");
            }
        }, 1000);
    });
}

function buyHalwa() {
    waitInQueue().then((message) => {
        console.log(message);
    }).catch((error) => {
        console.log(error);
    })
}

buyHalwa();