/*
Scrieți un script care, atunci când focalizarea este pierdută de pe un input (evenimentul blur), verifică dacă numărul de 
caractere introduse este corect.Numărul de caractere admis trebuie specificat în atributul data-length.
Dacă este introdus numărul corect de caractere, atunci border-ul devine verde, în caz contrar - roșu.
Pentru a adăuga stilurile necesare, utilizați clasele CSS valid și invalid pe care le-am adăugat deja la fișierele sursă 
ale acestui exercițiu.
 */
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("validation-input");

  input.addEventListener("blur", () => {
    const inputLength = input.value.length;
    const requiredLength = input.getAttribute("data-length");

    if (inputLength == requiredLength) {
      input.classList.remove("invalid");
      input.classList.add("valid");
    } else {
      input.classList.remove("valid");
      input.classList.add("invalid");
    }
  });
});
