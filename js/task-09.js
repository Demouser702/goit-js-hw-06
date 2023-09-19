/*Scrieți un script care schimbă culorile de fundal al elementului <body>, prin stiluri inline, atunci 
când se face click pe button.change-color și afișați valoarea culorii în span.color.

*/
const changeColorBtn = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

changeColorBtn.addEventListener("click", changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

function changeColor() {
  const widget = document.querySelector(".widget"); // Selectam div widget
  const newColor = getRandomHexColor();
  widget.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
}
