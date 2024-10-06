//your JS code here. If required.
// Function to create a promise that resolves with the input value
function getInputValue() {
    return new Promise((resolve) => {
        const inputValue = document.getElementById("ip").value;
        setTimeout(() => {
            resolve(Number(inputValue)); // Convert input value to a number
        }, 2000); // Resolves after 2 seconds
    });
}

// Function to multiply the number by 2
function multiplyByTwo(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = num * 2;
            document.getElementById("output").innerText = `Result: ${result}`;
            resolve(result);
        }, 1000); // Resolves after 1 second
    });
}

// Function to subtract 3 from the number
function subtractThree(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = num - 3;
            document.getElementById("output").innerText = `Result: ${result}`;
            resolve(result);
        }, 1000); // Resolves after 1 second
    });
}

// Function to divide the number by 2
function divideByTwo(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = num / 2;
            document.getElementById("output").innerText = `Result: ${result}`;
            resolve(result);
        }, 1000); // Resolves after 1 second
    });
}

// Function to add 10 to the number
function addTen(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = num + 10;
            document.getElementById("output").innerText = `Result: ${result}`;
            resolve(result);
        }, 1000); // Resolves after 1 second
    });
}

// Button click event listener
document.getElementById("btn").addEventListener("click", () => {
    getInputValue()
        .then(multiplyByTwo)
        .then(subtractThree)
        .then(divideByTwo)
        .then(addTen)
        .then(finalResult => {
            document.getElementById("output").innerText = `Final Result: ${finalResult}`;
        })
        .catch((error) => {
            console.error("An error occurred:", error);
        });
});
