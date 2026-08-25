function calcularTotal(precio, cantidad) {
  const total = precio * cantidad;
  return total;
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


// Función flecha: eleva un número al cuadrado
const cuadrado = (numero) => numero * numero;
console.log(cuadrado(4)); // 16

// Función flecha: verifica si alguien es mayor de edad
const esMayorEdad = (edad) => edad >= 18;
console.log(esMayorEdad(20)); // true

// Función flecha: arma el nombre completo
const nombreCompleto = (nombre, apellido) => `${nombre} ${apellido}`;
console.log(nombreCompleto("Ana", "Pérez")); // Ana Pérez


const productos = [
  { id: 1, nombre: 'iPhone 14', precio: 3200000, categoria: 'Gama alta', stock: 5 },
  { id: 2, nombre: 'iPhone SE', precio: 1800000, categoria: 'Gama media', stock: 0 },
  { id: 3, nombre: 'Samsung Galaxy S23', precio: 3500000, categoria: 'Gama alta', stock: 3 },
  { id: 4, nombre: 'Samsung Galaxy A54', precio: 1400000, categoria: 'Gama media', stock: 8 },
  { id: 5, nombre: 'Xiaomi Redmi Note 12', precio: 850000, categoria: 'Gama baja', stock: 0 },
  { id: 6, nombre: 'Xiaomi Poco X5', precio: 950000, categoria: 'Gama media', stock: 6 },
  { id: 7, nombre: 'Motorola Edge 40', precio: 1600000, categoria: 'Gama media', stock: 4 },
  { id: 8, nombre: 'Motorola G84', precio: 1100000, categoria: 'Gama media', stock: 2 },
  { id: 9, nombre: 'Google Pixel 8', precio: 3100000, categoria: 'Gama alta', stock: 1 },
  { id: 10, nombre: 'Realme C55', precio: 700000, categoria: 'Gama baja', stock: 10 }
];


productos.forEach((producto, indice) => {
  console.log(`${indice + 1}. ${producto.nombre} - $${producto.precio} - stock: ${producto.stock}`);
});



const preciosConIva = productos.map(producto => producto.precio * 1.19);
console.log(preciosConIva);

const nombresMayuscula = productos.map(producto => producto.nombre.toUpperCase());
console.log(nombresMayuscula);

const resumenProductos = productos.map(producto => `${producto.nombre} cuesta $${producto.precio}`);
console.log(resumenProductos);


const productosCaros = productos.filter(producto => producto.precio > 100000);
console.log(productosCaros);

const rangoMedio = productos.filter(producto => producto.precio >= 50000 && producto.precio <= 200000);
console.log(rangoMedio);

const gamaAlta = productos.filter(producto => producto.categoria === 'Gama alta');
console.log(gamaAlta);

const producto5 = productos.find(producto => producto.id === 5);
console.log(producto5);

function buscarProducto(id) {
  return productos.find(producto => producto.id === id);
}
console.log(buscarProducto(3));



const hayAgotados = productos.some(producto => producto.stock === 0);
console.log(hayAgotados); // true

const hayCarosDeMillon = productos.some(producto => producto.precio > 1000000);
console.log(hayCarosDeMillon);

const preciosValidos = productos.every(producto => producto.precio > 0);
console.log(preciosValidos); // true

const stockValido = productos.every(producto => producto.stock >= 0);
console.log(stockValido); // true

const valorInventario = productos.reduce(
  (total, producto) => total + producto.precio * producto.stock,
  0
);
console.log(valorInventario);


console.log(`El producto ${productos[0].nombre} cuesta $${productos[0].precio}`);

const { nombre, precio, stock } = productos[0];
console.log(nombre, precio, stock);

const productoActualizado = {
  ...productos[0],
  precio: 3000000,
  stock: 10
};
console.log(productoActualizado);

const estado = productoActualizado.stock > 0 ? 'Disponible' : 'Agotado';
console.log(`${productoActualizado.nombre} está: ${estado}`);