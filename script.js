"use strict";

const main = document.querySelector('.main');
const primaryColorValue = document.querySelector('.primary .colorValue');
const secondaryColorValue = document.querySelector('.secondary .colorValue');

let colorData = null;

fetch('https://randoma11y.com/stats/')
  .then(response => {return response.json();})
  .then(data => {
    colorData = data.latest_20.concat(data.most_active_20);
    setRandomColor(colorData);
  })
  .catch(err => {
    console.log('Error:', err);
    main.style.setProperty('--primary-color', '#fff');
    main.style.setProperty('--secondary-color', '#000');
    setColorValues('#ffffff', '#000000');
  });

const setRandomColor = colors => {
  const color = colors[Math.round(Math.random() * colors.length)];
  main.style.setProperty('--primary-color', color.color_one);
  main.style.setProperty('--secondary-color', color.color_two);
  setColorValues(color.color_one, color.color_two);
};

const setColorValues = (colorOne, colorTwo) => {
  primaryColorValue.textContent = colorOne;
  secondaryColorValue.textContent = colorTwo;
};

document.body.addEventListener('click', () => {setRandomColor(colorData)});
