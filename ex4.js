// Implementa el tipo de dato 'Array' que ofrece JavaScript; y algunos de sus métodos

// El constructor no tiene parámetros, sin embargo, debe inicializar una propiedad, por ejemplo this.elements como un valor de tipo array vació.

// Método 'addNew'. Añade un nuevo elemento al array. Puedes utilizar el método 'push' de JavaScript

// Implementa el método 'findIndex'. El método findIndex devuelve la posición un elemento se encuentra dentro del array. En caso de no estar, devuelve un -1. NO puedes utilizar el método 'findIndex' de JavaScript!

// Implementa el método 'join'. El método 'join' devuelve un string, con todos los elementos del array concatenadors por un separados, que debes pasar como argumento

class Array {
  constructor() {
    this.elements = [];
  }
  addNew(element) {
    this.elements.push(element);
  }

  findIndex(element) {
    let resultado = -1;
    for (let i = 0; i < this.elements.length; i++) {
      if (element == this.elements[i]) {
        resultado = i
      }
    }
    return resultado
  }

  joinCats(chr){
    return this.elements.join(chr)
  }
}

// PRUEBAS
const gatos = new Array();
gatos.addNew("Michi");
gatos.addNew("Cuki");
gatos.addNew("Loki");

// Debe devolver un 1
console.log(gatos.findIndex("Cuki"));
console.log(gatos.findIndex("Michi"));
console.log(gatos.findIndex("Peop"));



// Debe devolver 'Michi-Cuki-Loki'
console.log(gatos.joinCats('-'))
