'use strict';
function saludar() {
    const nombre = prompt('Escribe tu nombre');
    if (nombre === null) {
      alert(':( No escribiste tu nombre.');
    } else {
      alert('Hola, ' + nombre);
    }
  }
  