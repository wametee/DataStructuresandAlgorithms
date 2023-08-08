// //Creating a new promise and saving it to the testLuck variable.
// // Two variables are being passed, one for when the promise resolves, and one for if the promise gets rejected

// const testLuck = new Promise((resolve, reject) => {
//     if (Math.random() < 0.5) {
//         resolve('Lucky winner!')
//     } else {
//         reject (new Error('Unlucky!'))
//     }
// });

// testLuck.then(message => {
//     console.log(message)
// }).catch(error => {
//     console.log(error)
// })

// testLuck('0.1')

// Creating a new promise that runs the function in the setTimeout after 5 seconds
const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("All done!"), 5000)
})

// Creating an asychronous function using an arrow expression and saving it to a the variable asyncFunction
const asyncFunction = async () => {
    // Awaiting the promise to resolve and saving the result to the variable finalResult
    const finalResult = await newPromise;

    // Logging the result of the promise to the console
    console.log(finalResult)
}

asyncFunction();