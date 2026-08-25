function ProductoCard({ producto }) {
  const {
    nombre,
    precio,
    categoria,
    stock,
    imagen
  } = producto;

  const estado = stock > 0 ? 'Disponible' : 'Agotado';

  const mostrarProducto = () => {
    alert(`Seleccionaste ${nombre}`);
  };

  return (
    <article className="producto-card">
      <img src={imagen} alt={nombre} className="producto-imagen" />
      <h2>{nombre}</h2>
      <p>Categoría: {categoria}</p>
      <p>Precio: ${precio.toLocaleString()}</p>
      <p>Stock: {stock}</p>
      <strong>{estado}</strong>
      <br />
      <button
        onClick={mostrarProducto}
        disabled={stock === 0}
      >
        {
          stock > 0
            ? "Ver producto"
            : "Agotado"
        }
      </button>
    </article>
  );
}

export default ProductoCard;