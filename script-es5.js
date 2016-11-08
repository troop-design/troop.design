"use strict";

var main = document.querySelector('.main');
var primaryColorValue = document.querySelector('.primary .colorValue');
var secondaryColorValue = document.querySelector('.secondary .colorValue');

var colorData = null;

var setRandomColor = function setRandomColor(colors) {
  var color = colors[Math.floor(Math.random() * colors.length)];

  main.style.setProperty('--primary-color', color.color_one);
  main.style.setProperty('--secondary-color', color.color_two);
  setColorValues(color.color_one, color.color_two);
};

var setColorValues = function setColorValues(colorOne, colorTwo) {
  primaryColorValue.textContent = colorOne;
  secondaryColorValue.textContent = colorTwo;
};

fetch('https://randoma11y.com/stats/').then(function (response) {
  return response.json();
}).then(function (data) {
  colorData = data.latest_20.concat(data.most_active_20);
  setRandomColor(colorData);
}).catch(function (err) {
  console.log('Error:', err);
  main.style.setProperty('--primary-color', '#fff');
  main.style.setProperty('--secondary-color', '#000');
  setColorValues('#ffffff', '#000000');
});

primaryColorValue.addEventListener('click', function (e) {
  return e.stopPropagation();
});
secondaryColorValue.addEventListener('click', function (e) {
  return e.stopPropagation();
});
main.addEventListener('click', function () {
  setRandomColor(colorData);
});
