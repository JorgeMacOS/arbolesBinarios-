class Nodo {
    constructor(valor) {
      this.valor = valor;
      this.izquierda = null;
      this.derecha = null;
    }
  }
  
  function copiarArbol(arbol) {
    if (arbol === null) {
      return null;
    }
  
    const nuevoNodo = new Nodo(arbol.valor);
    nuevoNodo.izquierda = copiarArbol(arbol.izquierda);
    nuevoNodo.derecha = copiarArbol(arbol.derecha);
  
    return nuevoNodo;
  }