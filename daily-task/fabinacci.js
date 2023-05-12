
let person = {
    name : "jyoti",
    age : 12,
    city : "jammu",
    };
    function incrementAge(person){
        person.age++;
    }

/*person.age = 23;
person['age'] = 40
console.log(person.age);
console.log(person['age']);*/
 /* incrementAge(person);   
let date = new Date();
console.log(date.toDateString()); */
let s = "hello";
console.log(s.charAt(1));
for(let key in person){
    console.log(person[key])
}

