(function (){
    let counter = 0;
    let display = document.getElementById("counter");
    console.log(display);
    display.innerHTML="counter " + "=" + counter;
    let plus = document.getElementById("plus");
    plus.addEventListener("click", function(){
        counter++;
        display.innerHTML="counter " + "=" + counter;
    });


}) ();