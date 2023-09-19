/*
Scrieți un script pentru crearea și ștergerea unei colecții de elemente. Utilizatorul introduce numărul de elemente în input 
și dă click pe butonul Create, după care colecția este afișată în pagină. Când se dă click pe butonul Destroy, colecția de
 elemente va fi ștearsă.

*/
const createElementsBtn = document.querySelector("[data-create]");
const destroyElementsBtn = document.querySelector("[data-destroy]");
const input = document.querySelector("input[type='number']");

createElementsBtn.addEventListener("click", createElements);
destroyElementsBtn.addEventListener("click", destroyElements);

function createElements() {
  const numElements = parseInt(input.value);
  if (isNaN(numElements) || numElements <= 0) {
    return;
  }

  destroyElements();

  for (let i = 0; i < numElements; i++) {
    const div = document.createElement("div");
    div.classList.add("box");
    div.textContent = i + 1;
    boxes.appendChild(div);
  }
}

function destroyElements() {
  while (boxes.firstChild) {
    boxes.firstChild.remove();
  }
}

function createBoxes(amount) {
  const boxesContainer = document.querySelector("#boxes");

  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const div = document.createElement("div");
    div.classList.add("item");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    const textSpan = document.createElement("span");
    textSpan.textContent = i + 1;
    div.appendChild(textSpan);
    boxesContainer.appendChild(div);
  }
}
createBoxes(4);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

/*Scrieți o funcție destroyBoxes() care va șterge conținutul div#boxes, ștergând astfel toate elementele create.*/
function destroyBoxes() {
  const boxesContainer = document.querySelector("#boxes");
  while (boxes.firstChild) {
    boxes.firstChild.remove();
  }
}
