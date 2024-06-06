"use strict";
let numbers = [3, 7, 9];
numbers.push(5);
console.log(numbers[0]);
function showCoords(obj) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
//non-null
const p = document.getElementById("some-p");
console.log(p.innerText);
