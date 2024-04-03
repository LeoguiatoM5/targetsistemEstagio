function pertenceSequenciaFibonacci(numero) {
  let a = 0;
  let b = 1;

  while (a <= numero) {
    if (a === numero) {
      return true;
    }
    let temp = b;
    b = a + b;
    a = temp;
  }

  return false;
}

const numeroInformado = 13;
const pertence = pertenceSequenciaFibonacci(numeroInformado);

if (pertence) {
  console.log(`${numeroInformado} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numeroInformado} não pertence à sequência de Fibonacci.`);
}
