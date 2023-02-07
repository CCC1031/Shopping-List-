var _ = require ('lodash');

var array = [1,2,3,4,5,6,7]

console.log('answer:', _.without(array, 3));

let button = document.getElementById("enter");
let input = document.getElementById("user-input");
let ul = document.querySelector("ul");

button.addEventListener("click", function() {
    if (input.value.length > 0) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = ""; 
    }
})





