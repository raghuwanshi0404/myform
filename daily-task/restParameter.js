function abc(...input){
    let sum = 0;
    for(let i of input){
        sum+=i;
    }
    return sum;
}
console.log(abc(1,3,4,5,6,7,8));
console.log(abc(5,8, 8,9,23,34));

//rest parameter returns array
function abc1(...input){
    
    return input;
}

console.log(abc1(5,8, 8,9,23,34));