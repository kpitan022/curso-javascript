// 1-

const invitados = [
  "Lucas",
  "Matias",
  "Jose",
  "Pedro",
  "Martina",
  "Marcelo",
  "Esteban",
  "Marcela",
  "Martin",
];
const total = invitados.length;
console.log(`total de invitados: ${total}`);
console.log(`-------------`);

// 2-
const ultimo = invitados[invitados.length - 1];

console.log(`Ultimo invitado: ${ultimo}`);
console.log(`-------------`);

// 3-
const nuevaLista = invitados;
invitados.push("Pedro");
console.log(nuevaLista);
console.log(`-------------`);

// 4-
const confirmados = nuevaLista.filter(
  (nombre) => nombre.toLowerCase() != "marcela"
);
console.log(confirmados);
console.log(`-------------`);

// 4b-
const orden = confirmados.map((name, index) => `${name}. Orden: ${index + 1}`);

console.log(orden);
console.log(`-------------`);

// 5-

const platos = confirmados.reduce((acumulador, valorActual) => {
  if (valorActual.toLowerCase() === "lucas") {
    return acumulador + 3;
  } else if (
    valorActual.toLowerCase() === "esteban" ||
    valorActual.toLowerCase() === "jose"
  ) {
    return acumulador + 1;
  } else {
    return acumulador + 4;
  }
}, 0);

console.log(platos);
console.log(`-------------`);

// 6-
console.log(confirmados.sort());
console.log(`-------------`);
