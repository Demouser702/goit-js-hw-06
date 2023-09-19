/*
Codul HTML conține o listă de categorii ul#categories.
Scrieți un script care:

Va număra și afișa în consolă numărul total de categorii din ul#categories, adică elementele li.item.
Pentru fiecare element li.item din lista ul#categories, va găsi și afișa în consolă titlul elementului (tag-ul <h2>) și numărul de elemente din acea categorie (toate elementele <li>).
Ca rezultat, în consolă vor fi afișate astfel de mesaje:
*/
const categoryContainer = document.querySelector("ul");
const categoryItems = categoryContainer.getElementsByClassName("item");
console.log("Number of categories:", categoryContainer.children.length);

Array.from(categoryItems).forEach((category) => {
  const categoryName = category.querySelector("h2");
  const categoryEl = category.querySelectorAll("li");
  console.log("Category:", categoryName.textContent);
  console.log("Elements:", categoryEl.length);
});
