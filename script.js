var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.querySelector('body');
var random = document.querySelector('button');

function setGradient() {
  setColors(color1.value, color2.value);
  setCSSText();
}

function randomizeColors() {
  var first = getRandomColor();
  var second = getRandomColor();
  setColors(first, second);
  color1.value = first;
  color2.value = second;
  setCSSText();
}

function setColors(firstColor, secondColor) {
  body.style.background = 'linear-gradient(to right, ' + firstColor + ', ' +  secondColor + ')';
}

function setCSSText() {
  return css.textContent = body.style.background + ';';
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

body.onload = function setInputs() {
  setGradient(); 
}

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
random.addEventListener('click', randomizeColors);