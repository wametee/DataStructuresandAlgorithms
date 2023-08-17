function printAllNumbersThenAllPairSums(numbers){
    console.log('THese are the numbers')
    numbers.forEach(function(number){
        console.log(number)
    });
    console.log('and these are their sums;')
    numbers.forEach(function(firstNumber){
        numbers.forEach(function(secondNumber){
            console.log(firstNumber + secondNumber)
        })
    })
}

printAllNumbersThenAllPairSums([1,2,3,4,5])