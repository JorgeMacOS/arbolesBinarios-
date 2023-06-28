class Nodo {
    constructor(valor) {
      this.valor = valor;
      this.izquierda = null;
      this.derecha = null;
    }
  }
  
  function mostrarNodosEnNivel(arbol, nivel) {
    if (arbol === null) {
      return;
    }
  
    if (nivel === 1) {
      console.log(arbol.valor);
    } else if (nivel > 1) {
      mostrarNodosEnNivel(arbol.izquierda, nivel - 1);
      mostrarNodosEnNivel(arbol.derecha, nivel - 1);
    }
  }
  