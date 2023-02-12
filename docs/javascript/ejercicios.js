"use strict";
// 1. pedir nombre al usuario y saludarlo.
const $exer1Form = document.getElementById("exer1Form");
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
$exer1Form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log($exer1Form.name.value);
  alert(`Hola, ${$exer1Form.name.value}! `, "success");
});
const alert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");
  alertPlaceholder.append(wrapper);
};
// 2. Pedir edad al usuario y responder si es o no es mayor de edad.
const $mayorDeEdad = document.getElementById("form2");
const alertPlaceholder2 = document.getElementById("liveAlertPlaceholder2");
$mayorDeEdad.addEventListener("submit", (e) => {
  e.preventDefault();
  mayordeedad();
});
function mayordeedad() {
  const $edad = document.getElementById("edad").value;
  if ($edad >= 18) {
    alert2("Eres mayor de edad", "success");
  } else if ($edad <= 18) {
    alert3("No eres mayor de edad", "success");
  } else {
    alert2("Debes ingresar tu edad");
  }
}
const alert2 = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");
  alertPlaceholder2.append(wrapper);
};
const alert3 = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="text-danger alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");
  alertPlaceholder2.append(wrapper);
};
// 3. Pedir nombre y edad al usuario. Si se llama pepita y es mayor de edad permitir el ingreso a la sala de espera #1.
//    Si se llama pepita y es menor de edad permitir el ingreso a la sala #2.
//    Si no es pepita pero es mayor de edad ingresar a la sala #3.
//    Si no se llama pepita y no es mayor de edad ingresar a la sala #4.
const $nombreEdad = document.getElementById("form3");
const alertPlaceholder3 = document.getElementById("liveAlertPlaceholder3");
$nombreEdad.addEventListener("submit", (e) => {
  e.preventDefault();
  verificarDatos();
});
function verificarDatos() {
  const Nombre = document.getElementById("username3").value;
  const Edad = document.getElementById("edad3").value;
  if (Nombre === "pepita" && Edad >= 18) {
    alert4("Por favor ingresa a la sala #1");
  } else if (Nombre === "pepita" && Edad <= 18) {
    alert4("Puedes Ingresara a la sala #2");
  } else if (Nombre != "pepita" && Edad >= 18) {
    alert4("Puedes Ingresar a la sala #3");
  } else {
    alert4("Ingresa a la sala #4");
  }
}
const alert4 = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder3.append(wrapper);
};
