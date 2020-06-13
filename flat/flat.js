// Array padre con hijos a diferentes niveles
const aOrigen = [[[1,2,3],[4,5]],[6,7,8],9];


// 1 - Aplanamos 1 nivel (por defecto es nivel 1) de aOrigen en aDestino
const aDestino = aOrigen.flat();

// El resultado es [ [ 1, 2, 3 ], [ 4, 5 ], 6, 7, 8, 9 ]



// 2 - Aplanamos 2 niveles de aOrigen en aDestino
const aDestino2 = aOrigen.flat(2);

// El resultado es [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
