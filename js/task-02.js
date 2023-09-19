/*
Codul HTML conține o listă goală ul#ingredients.În fișierul JavaScript se află o matrice cu următoarele șiruri.
Scrieți un script care pentru fiecare element al matricei ingredients:

Va crea un element <li> separat. Asigurați-vă că folosiți metoda document.createElement().
Adăugați numele ingredientului ca conținut text.
Adăugați clasa item la element.
Apoi va insera toate elementele <li> dintr-o singură operație în lista ul#ingredients.
*/

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const containerEl = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  containerEl.appendChild(li);
});
console.log(containerEl);
