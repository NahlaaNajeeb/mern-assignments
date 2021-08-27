function isprime(numbers){
    if(numbers<2)return false;
    for(let i=2;i<numbers;i++)
        if(numbers%i===0)
            return false;
    return true;        
}

console.log(isprime(10))
