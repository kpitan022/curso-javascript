const miArray = [
  "alexis",
  "armando",
  "martina",
  "juan",
  "pedro",
  "armando",
  "martina",
];

// iteramos un array con un bucle for
// for (let i = 0; i < miArray.length; i++) {
//   console.log(miArray[i]);
// }

// iterar con forEach
miArray.forEach((i, index) => {
  console.log(1 + parseInt(index), i);
});

//Con map

const newArrayWithMap = miArray.map((name) => `Nombre: ${name}`);

console.log(newArrayWithMap);

//Filter

const filteredArray = miArray.filter(
  (name) => name.toLowerCase() === "martina"
);

console.log(filteredArray.length);

//FIND
const existingElement = miArray.find(
  (name) => name.toLowerCase() === "martina"
);

console.log(existingElement);

// SORT para ordenar

const numbers = [10, 20, 30, 40];

const orderedArray = miArray.sort();

console.log(orderedArray);

console.log(orderedArray.reverse());

const orderedArray2 = numbers.sort((a,b)=>{});

console.log(orderedArray2.reverse());


//Con reduce

const total = numbers.reduce((acumulador, valorActual) => {
  console.log("Acumulador", acumulador);
  console.log("Valor Actual", valorActual);

  console.log("Aca termina la iteracion");
  return acumulador + valorActual;
}, 0);

const total2 = numbers.reduce(
  (acumulador, valorActual) => acumulador + valorActual,
  0
);

console.log(`\ncon return implicito ${total2}`);
