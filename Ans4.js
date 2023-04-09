// Write a program in JS to check whether a number is prime or not.

function checkPrime(num){
    if(num == 1 || num == 0)
        return "Not Prime";
    for(let i = 2; i*i < num;i++){
        if(num % i == 0)
            return "Not Prime";   
    }
    return "Prime";
}

console.log(checkPrime(13));