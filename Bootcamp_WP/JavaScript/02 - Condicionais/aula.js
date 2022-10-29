const camisetaAzul = true;
const camisetaVerde = false;

const numero = 500;

const eNumeroPar = (numero % 5) === 0;

if (numero === 0){
    console.log("Número inválido");
}else if(eNumeroPar){
    console.log("sim");
}else{
    console.log("Não");
}

// console.log(eNumeroPar);