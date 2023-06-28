class Nodo {
    constructor(valor) {
      this.valor = valor;
      this.izquierda = null;
      this.derecha = null;
    }
  }
  
  function sonArbolesIdenticos(arbolA, arbolB) {
    if (arbolA === null && arbolB === null) {
      return true;
    }
  
    if (arbolA === null || arbolB === null) {
      return false;
    }
  
    return (
      arbolA.valor === arbolB.valor &&
      sonArbolesIdenticos(arbolA.izquierda, arbolB.izquierda) &&
      sonArbolesIdenticos(arbolA.derecha, arbolB.derecha)
    );
  }
  