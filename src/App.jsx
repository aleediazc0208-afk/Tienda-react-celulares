import { useState } from 'react';
import ProductoCard from './components/productoCard';
import { productos } from './data/productos';
import './App.css';

function App() {
  const [busqueda, setBusqueda] = useState("");

  const disponibles = productos.filter(producto => producto.stock > 0);
  const hayAgotados = productos.some(producto => producto.stock === 0);
  const valorInventario = productos.reduce(
    (total, producto) => total + producto.precio * producto.stock,
    0
  );

  const productosFiltrados = productos.filter(producto =>
    producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase())
  );

  return (
    <main className="contenedor">
      <h1>Tienda de Celulares React</h1>
      <p>Productos disponibles: {disponibles.length}</p>
      <p>¿Hay productos agotados?: {hayAgotados ? 'Sí' : 'No'}</p>
      <p>Valor del inventario: ${valorInventario.toLocaleString()}</p>

      <h2>Todos los productos</h2>
      <input
        type="text"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={(evento) => {
          setBusqueda(evento.target.value);
        }}
      />

      {
        productosFiltrados.length === 0
          ? <p>No se encontraron productos.</p>
          : null
      }

      <section className="productos">
        {productosFiltrados.map(producto => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </section>

      <h2>Solo disponibles</h2>
      <section className="productos">
        {disponibles.map(producto => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </section>
    </main>
  );
}

export default App;