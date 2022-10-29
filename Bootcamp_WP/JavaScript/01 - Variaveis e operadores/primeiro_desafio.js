const precoCombustivel = 4.79;
const kmPorLitro = 12;
const distancia = 1516;

var resultado = distancia / kmPorLitro * precoCombustivel;
console.log(resultado.toFixed(2));