let person1 = {name: 'jyoti', age:22};
let person2 = {name: 'jyoti', age:28};
let sayHello = function(){
    console.log('hi ' + this.name +' ,' + this.age);
}
sayHello.call(person1)
sayHello.call(person2)