
function calcularTotal(precio, cantidad) {
  const total = precio * cantidad; 
}

const resultado = calcularTotal(50000, 3);
console.log(resultado); 

function sumar(a, b) {
  return a + b;
}
console.log(sumar(10, 5));


function restar(a, b) {
  return a - b;
}
console.log(restar(10, 5)); 


function multiplicar(a, b) {
  return a * b;
}
console.log(multiplicar(10, 5));


function dividir(a, b) {
  return a / b;
}
console.log(dividir(10, 5)); 


function calcularPromedio(nota1, nota2, nota3) {
  const promedio = (nota1 + nota2 + nota3) / 3;
  return promedio;
}
console.log(calcularPromedio(4.5, 3.8, 5.0)); 


// console.log() solo muestra un valor en la terminal, no lo devuelve para usarlo en el código.
// return entrega el resultado de la función a quien la llamó, para poder guardarlo y reutilizarlo.