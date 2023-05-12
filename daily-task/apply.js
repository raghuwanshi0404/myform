let person1 = {
    
    age  :  '40',
    city : 'jammu'
};

let person2 = {
   
    age  :  '50',
    city : 'bhopal'
};
function fullAge( state , gender, profession){
    console.log(this.age,this.city,state ,gender,profession)
}
fullAge.apply(person2,['madhyapradesh', 'female', 'lawyer']);