const validator = {
  isValid: function (cardNumber) {
    //reversa de una cadena
    const arrayNumero = cardNumber.split('')
    const reversaArray = arrayNumero.reverse()

    //Pares e Impares separados

    const indicesPares = reversaArray.filter((valor, indice) => indice % 2 !== 0);

    const indicesImpares = reversaArray.filter((valor, indice) => indice % 2 === 0).map(elemento => parseInt(elemento));


    // Multiplicar los pares
    for (let i = 0; i < indicesPares.length; i++) {
      const numero = parseInt(indicesPares[i]);
      const multiplicacion = numero * 2;
      if (multiplicacion >= 10) {
        const sumDigitos = multiplicacion - 9;
        indicesPares[i] = sumDigitos;
      }
      else if (multiplicacion <= 9) {
        const igualNumero = multiplicacion
        indicesPares[i] = igualNumero
      }
    }

    const nuevoArrayPI = indicesPares.concat(indicesImpares);
    const sumaP = nuevoArrayPI.reduce((a, b) => a + b);
    const division = sumaP % 10
    if (division === 0) {

      return true
    }

    else if (division !== 0) {

      return false
    }

  },

  maskify: function (cardNumber) {
    const apartar = cardNumber.slice(0, (-4));
    const nuevoApartar = apartar.replace(/./g, "#")
    const ultimos4 = cardNumber.slice(-4)
    const concatenar = nuevoApartar.concat(ultimos4)
    return concatenar

  }

}



export default validator;

