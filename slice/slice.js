const aNumeros = [0,1,2,3,4,5,6,7];

// 1 - Recuperamos los 5 primeros
const aNumerosV1 = aNumeros.slice(0,5);

// aNumerosV1 --> [ 0, 1, 2, 3, 4 ]



// 2 - Recuperamos sólo la tercera posición (el 2)
const aNumerosV2 = aNumeros.slice(2,3);

// aNumerosV2 --> [ 2 ]



// 3 - Hacemos una copia superficial del array
const aNumerosV3a = aNumeros.slice(0,aNumeros.length);

// También puede ser
const aNumerosV3b = aNumeros.slice();

// aNumerosV3a o aNumerosV3b --> [0,1,2,3,4,5,6,7]



// 4 - Obtenemos elementos del final
const aNumerosV4 = aNumeros.slice(-2);

// aNumerosV4 --> [6,7]
