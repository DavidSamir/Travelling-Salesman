// to get Distance between each country
import { Distance } from './location.js';




let distance = Distance(
    document.getElementById("svg_20"),
    document.getElementById("svg_29")
);

console.log(distance)
let main = document.querySelectorAll('.location > ellipse')
let i = {}
main.forEach(element => {
    let te = Math.floor(Distance(document.getElementById("svg_31"), element))
    i[te] = element
});

console.log(i)
console.log(i[Object.keys(i)[1]])
console.log(i[Object.keys(i)[2]])