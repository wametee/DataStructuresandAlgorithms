function primeFactors(n) {
    //initialize an empty array 
    const factors = [];
    //Initialize a divisor
    let divisor = 2;
  
    while (n >= 2) {
      if (n % divisor == 0) {
        factors.push(divisor);
        n = n / divisor;
      } else {
        divisor++;
      }
    }
    return console.log(factors);
  }
  
primeFactors(4)

