/*Scrieți un script care răspunde la modificarea valorii din input#font-size-control (evenimentul input) și modifică stilurile 
inline al span#text prin actualizarea proprietății font-size. Ca rezultat, atunci când glisați scrollbar-ul, dimensiunea textului 
se va schimba.
}*/

const fontSizeControl = document.getElementById("font-size-control");
const textElement = document.getElementById("text");

fontSizeControl.addEventListener("input", function (event) {
  const fontSize = event.target.value;
  textElement.style.fontSize = fontSize + "px";
});
