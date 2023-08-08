// const nemo = ['nemo']

// const large = new Array(10000).fill('nemo')
// function findNemo(array){
//     // let t0 = performance.now()
//     for (let i =0; i < array.length; i++){
//         if (array[i] === 'nemo'){
//             console.log('Found Nemo')
//         }
//     }
//     // let t1 = performance.now()
//     // console.log('Callto find Nemo took '  + (t1-t0) + ' Milliseconds')
// }

// findNemo(large ) // 0(n) Big o of n. Linear time

// //As the number of inputs increases the number of operations increases 

// // Runtime- How long something takes to learn
// //How a function, and its runtime grows as our input increases

 
// const boxes = [0,1,2,3,4,5]
// function logFirstTwoBoxes(boxes){
//     console.log(boxes[0]) // number of operations 0(1)
//     console.log(boxes[1]) // number of operations 0(1)
// }
// //0(1)  very excellent 
// // Runs two operations  0(2)
// logFirstTwoBoxes(boxes)
function funChallenge(input) {
    let a = 10; // o(1) runs once
    a = 50 + 3; // o(1)
  
    for (let i = 0; i < input.length; i++) { // 0(n)
      anotherFunction(); // 0(n)
      let stranger = true; // 0(n)
      a++; // 0(n)
    }
    return a; // 0(1)
  }

  funChallenge() 