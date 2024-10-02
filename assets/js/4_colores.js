const blue = document.getElementById("uno");
const red = document.getElementById("dos");
const green = document.getElementById("tres");
const yellow = document.getElementById("cuatro");

function pintar(elemento, color) {
  elemento.style.backgroundColor = color;
}

blue.addEventListener("click", function () {
  pintar(blue, "black");
});
red.addEventListener("click", function () {
  pintar(red, "black");
});
green.addEventListener("click", function () {
  pintar(green, "black");
});
yellow.addEventListener("click", function () {
  pintar(yellow, "black");
});
