import { useState } from "react";

function UpdateObject() {
  const [products, setProducts] = useState([
    { id: 1, name: "Product A", price: 20 },
    { id: 2, name: "Product B", price: 50 },
    { id: 3, name: "Product C", price: 30 },
  ]);

  const [selectedId, setSelectedId] = useState("");
  const [newPrice, setNewPrice] = useState("");

  const updatePrice = () => {
    if (!selectedId || !newPrice) {
      alert("Por favor, selecciona un producto y un precio válido.");
      return;
    }

    const updatedProducts = products.map((product) =>
      product.id === parseInt(selectedId)
        ? { ...product, price: parseFloat(newPrice) }
        : product
    );

    setProducts(updatedProducts);
    setSelectedId("");
    setNewPrice("");
  };

  return (
    <div>
      <h1>Actualizar Precio de Productos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      <div>
        <label>
          Selecciona el ID del producto:
          <select
            value={selectedId}
            onChange={(e) => setSelectedId(e.target.value)}
          >
            <option value="">-- Seleccionar --</option>
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          Nuevo Precio:
          <input
            type="number"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
          />
        </label>
      </div>
      <button onClick={updatePrice}>Actualizar Precio</button>
    </div>
  );
}

export default UpdateObject;
