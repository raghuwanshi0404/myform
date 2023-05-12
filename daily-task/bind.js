let obj1 = {
    age : 34
};

let obj2 = {
    age : 35
};
function fullAge(){
      console.log(this.age)
};


 fullAge.call(obj2);
 let actualAge = fullAge.bind(obj2);
 actualAge()
