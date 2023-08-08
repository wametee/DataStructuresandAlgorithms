function solution(A, K) {
    // Implement your solution here
    //Run a loop k times
    //It initializes a loop that will run K times. The loop counter i starts from 0 and increments by 1 in each iteration.
    //Inside the loop, A.pop() removes the last element from the array A. This element is then passed as an argument to A.unshift().
    //A.unshift() adds the element passed as an argument to the beginning of the array A, shifting all existing elements to the right.
    //After the loop completes, the array A has been rotated K times, with the last K elements moved to the front.
    for (let i = 0; i < K; i++) {
      A.unshift(A.pop());
  }

  return A;
}
// const rotateArray2 = function(nums, k) {

//     // reverse helper function
//     function reverse(arr, start, end) {
//       while (start < end) {
//         [arr[start], arr[end]] = [arr[end], arr[start]];
//         start++;
//         end--;
//       }
//     }
  
//     k %= nums.length;
  
//     reverse(nums, 0, (nums.length - 1));
//     reverse(nums, 0, (k - 1));
//     reverse(nums, k, (nums.length - 1));
  
//     return nums;
//   }