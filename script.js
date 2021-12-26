var h3 = document.querySelector("h3");
var body = document.getElementById("container")

var col1 = document.querySelector("#col1");
var col2 = document.querySelector("#col2");

console.log(h3);
console.log(col1);
console.log(col2);

function setColor() {
    body.style.background = "linear-gradient(to right, " + col1.value + ", " + col2.value + ")";
    h3.textContent = body.style.background + ";"
}

col1.addEventListener("input", setColor);

col2.addEventListener("input", setColor);