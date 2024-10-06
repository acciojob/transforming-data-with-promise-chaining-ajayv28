document.getElementById('btn').addEventListener('click', function() {
    const inputNumber = parseFloat(document.getElementById('ip').value);
    const outputDiv = document.getElementById('output');

    // Check if input is a valid number
    if (isNaN(inputNumber)) {
        outputDiv.textContent = 'Please enter a valid number.';
        return;
    }

    // Start the promise chaining
    Promise.resolve(inputNumber)
        .then(number => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    outputDiv.textContent = `Result: ${number}`;
                    resolve(number);
                }, 2000);
            });
        })
        .then(number => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const result = number * 2;
                    outputDiv.textContent = `Result: ${result}`;
                    resolve(result);
                }, 1000);
            });
        })
        .then(number => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const result = number - 3;
                    outputDiv.textContent = `Result: ${result}`;
                    resolve(result);
                }, 1000);
            });
        })
        .then(number => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const result = number / 2;
                    outputDiv.textContent = `Result: ${result}`;
                    resolve(result);
                }, 1000);
            });
        })
        .then(number => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const result = number + 10;
                    outputDiv.textContent = `Result: ${result}`;
                    resolve(result);
                }, 1000);
            });
        })
        .then(finalResult => {
            outputDiv.textContent = `Final Result: ${finalResult}`;
        })
        .catch(error => {
            outputDiv.textContent = `Error: ${error.message}`;
        });
});
