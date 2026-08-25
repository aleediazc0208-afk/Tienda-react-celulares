// escogi opcion E (contador de agotados con reduce) y opcion F (boton "limpiar filtros")


import { useState } from 'react';
import ProductoCard from './components/productoCard';
import { productos } from './data/productos';
import './App.css';

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [soloDisponibles, setSoloDisponibles] = useState(false);

  const disponibles = productos.filter(producto => producto.stock > 0);
  const hayAgotados = productos.some(producto => producto.stock === 0);
  const valorInventario = productos.reduce(
    (total, producto) => total + producto.precio * producto.stock,
    0
  );

  const cantidadAgotados = productos.reduce(
    (total, producto) => producto.stock === 0 ? total + 1 : total,
    0
  );

  const productosFiltrados = productos.filter(producto => {
    const coincideNombre = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoria === "Todas" || producto.categoria === categoria;

    const coincideStock =
      !soloDisponibles || producto.stock > 0;

    return coincideNombre && coincideCategoria && coincideStock;
  });

  const limpiarFiltros = () => {
    setBusqueda("");
    setCategoria("Todas");
    setSoloDisponibles(false);
  };

  return (
    <main className="contenedor">
      <h1>Tienda de Celulares React</h1>
      <p>Productos disponibles: {disponibles.length}</p>
      <p>¿Hay productos agotados?: {hayAgotados ? 'Sí' : 'No'}</p>
      <p>Cantidad de productos agotados: {cantidadAgotados}</p>
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

      <select
        value={categoria}
        onChange={(evento) => setCategoria(evento.target.value)}
      >
        <option value="Todas">Todas</option>
        <option value="Gama alta">Gama alta</option>
        <option value="Gama media">Gama media</option>
        <option value="Gama baja">Gama baja</option>
      </select>

      <label>
        <input
          type="checkbox"
          checked={soloDisponibles}
          onChange={(evento) =>
            setSoloDisponibles(evento.target.checked)
          }
        />
        Mostrar únicamente disponibles
      </label>

      <button onClick={limpiarFiltros}>
        Limpiar filtros
      </button>

      <p>Productos encontrados: {productosFiltrados.length}</p>

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