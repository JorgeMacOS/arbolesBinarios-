class Nodo {
    constructor(valor) {
      this.valor = valor;
      this.izquierda = null;
      this.derecha = null;
    }
  }
  
  function obtenerNumeroHojas(arbol) {
    if (arbol === null) {
      return 0;
    }
  
    if (arbol.izquierda === null && arbol.derecha === null) {
      return 1;
    }
  
    const hojasIzquierda = obtenerNumeroHojas(arbol.izquierda);
    const hojasDerecha = obtenerNumeroHojas(arbol.derecha);
  
    return hojasIzquierda + hojasDerecha;
  }
  
  const numeroHojas = obtenerNumeroHojas(arbol);
  console.log(`El número de hojas del árbol es: ${numeroHojas}`);