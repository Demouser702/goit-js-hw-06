/*
Contorul este format dintr-un tag span și două butoane care, atunci când sunt apăsate, ar trebui să-și mărească sau scadă valoarea cu unu.

Declarați o variabilă counterValue ce va stoca valoarea curentă a contorului și asignați-i valoarea 0 pentru început.
Adăugați click handler pe butoane, în interiorul cărora vei mări sau micșora valoarea contorului.
Actualizați interfața cu noua valoare a variabilei counterValue.
*/
const incrementCount = document.querySelector("[data-action='increment']");
const decrementCount = document.querySelector("[data-action='decrement']");
const totalCount = document.getElementById("value");

let counterValue = 0;
totalCount.innerText = counterValue;

const handleIncrement = () => {
  counterValue++;
  totalCount.innerText = counterValue;
};

const handleDecrement = () => {
  counterValue--;
  totalCount.innerText = counterValue;
};

incrementCount.addEventListener("click", handleIncrement);
decrementCount.addEventListener("click", handleDecrement);
