function boo(n){
    for(let i = 0; i < n.length; i++){
        console.log('booooo!')
    }
}

boo([1,2,3,4,5]) // 0(1)

function arrayOfHinTimes(n){
    let hiArray = []
    for (let i = 0; i < n.length; i++){
        hiArray[i] = 'hi';
    }
    return hiArray
}

arrayOfHinTimes(6) // O(n)