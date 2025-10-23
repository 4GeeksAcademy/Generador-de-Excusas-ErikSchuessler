import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let who = ['El perro', 'Mi abuela', 'El cartero', 'Mi pajaro xd', 'Mi jefe'];

  let action = ['se comió', 'orinó', 'chocó', 'rompió'];

  let what = ['mi tarea', 'mi teléfono', 'el coche'];

  let when = ['antes de clase', 'mientras dormía', 'mientras hacía ejercicio', 'durante el almuerzo', 'mientras rezaba'];
  
  //let whoAleatorio = seleccionarAleatorio(who);
  //let actionAleatorio = seleccionarAleatorio(action);
  //let whatAleatorio = seleccionarAleatorio(what);
  //let whenAleatorio = seleccionarAleatorio(when);
  let excuseElement = document.querySelector("#excuse");

  excuseElement.innerHTML = `${seleccionarAleatorio(who)} ${seleccionarAleatorio(action)} ${seleccionarAleatorio(what)} ${seleccionarAleatorio(when)}`;
};

function seleccionarAleatorio(lista) {
  let elementoAleatorio = Math.floor(Math.random() * lista.length);
  return lista[elementoAleatorio];
};