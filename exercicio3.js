function proximoElementoFibonacci(n) {
    if (n <= 1) return n;
    let a = 1, b = 1;
    for (let i = 2; i < n; i++) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    return b;
}

let sequencias = [
    [1, 3, 5, 7],
    [2, 4, 8, 16, 32, 64],
    [0, 1, 4, 9, 16, 25, 36],
    [4, 16, 36, 64],
    [1, 1, 2, 3, 5, 8],
    [2, 10, 12, 16, 17, 18, 19]
];

for (let i = 0; i < sequencias.length; i++) {
    let sequencia = sequencias[i];
    let proximoElemento;

    if (i === 4) {
        proximoElemento = proximoElementoFibonacci(sequencia.length + 1);
    } else if (i === 5) {
        let padroes = [8, 2, 4, 1, 1, 1];
        proximoElemento = sequencia[sequencia.length - 1] + padroes[sequencia.length % padroes.length];
    } else {
        proximoElemento = i === 2 ? Math.pow(sequencia.length, 2) : (sequencia[sequencia.length - 1] + (i === 3 ? 2 : 0));
    }

    console.log(`Para a sequência ${String.fromCharCode(97 + i)}), o próximo elemento é: ${proximoElemento}`);
}