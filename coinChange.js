// function countChange(money, coins) {
//   // your implementation here
//   //Initialize a variable to keep count
//   let count = 0
//   //Loop through the coins array 
//   // Check if the sum equal the money
//   //If its not equal increment the coins cont
//   //if its equal return the count
//   for (let i = 0; i < coins.length; i++){
//     if (money !== 0 ){
//       count += coins[i] 
//     }
//   }
//   if (count !== money) return 0
// }
// function countChange(money, coins) {
//     let count = 0
//     for (let i = 0; i < coins.length; i++){
//       if(money % coins[i] === 0 && money % coins[i + 1] === 0) {
//         count += 2
//       }else if(count+=coins[i] === money) {
//         count += 1
//       }
//     } 
//     return console.log(count);
// }
function countChange(money, coins) {
    let count = 0
    for (let coin of coins){
        if (money % coins[coin] === coins > 1){
            count += 2
        }else if(money % coins[coin] === coins < 1){
            count += 1
        }
    }
    return console.log(count)

}

countChange(4, [1,2]) 
countChange(10, [5,2,3]) 
countChange(11, [5,7])