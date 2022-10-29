const precoEtanol = 4.79;
const precoGasolina = 7.79;
const kmPorLitro = 12;
const distancia = 100;
const tipoCombustivel = 'Etanol';

const litrosConsumidos = distancia / kmPorLitro;

if (tipoCombustivel === 'Etanol'){
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
}else{
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}




