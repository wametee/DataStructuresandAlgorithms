function printAllNumbersThenAllPairSums(numbers){
    console.log('THese are the numbers')
    numbers.forEach(function(number){
        console.log(number)
    });// o(n)
    console.log('and these are their sums;')
    numbers.forEach(function(firstNumber){
        numbers.forEach(function(secondNumber){
            console.log(firstNumber + secondNumber)
        })
    }) //two loops nested // O(n ^2)
}

printAllNumbersThenAllPairSums([1,2,3,4,5])

O(n^2)

//worried about scale
// As things get larger and larger 