/*
Gestionarea trimiterii formularului form.login-form trebuie să fie în cadrul evenimentului submit.
La trimiterea formularului, pagina nu trebuie să se reîncarce.
Dacă formularul are câmpuri goale, afișați un alert care avertizează că toate câmpurile trebuie completate.
Dacă utilizatorul a completat toate câmpurile și a trimis formularul, colectați valorile câmpului într-un obiect în care numele câmpului va fi numele proprietății, iar valoarea câmpului va fi valoarea proprietății. Pentru a accesa elementele formularului, folosiți proprietatea elements.
Afișați obiectul cu datele introduse în consolă și ștergeți valorile câmpurilor din formular, folosind metoda reset.
const registerForm = document.querySelector(".form");

*/
const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleLogin);
function handleLogin(event) {
  event.preventDefault();
  const loginEmail = loginForm.elements.email.value;
  const loginPassword = loginForm.elements.password.value;
  if (loginEmail === "" || loginPassword === "") {
    return console.log("Please fill in all the fields!");
  }
  console.log(`Login: ${loginEmail}, Password: ${loginPassword}`);
  loginForm.reset();
}
