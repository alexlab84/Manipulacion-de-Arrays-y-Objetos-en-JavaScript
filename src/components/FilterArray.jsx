import  { useState } from 'react';

function FilterArray() {
  const products = [
    { name: 'Product 1', price: 30 },
    { name: 'Product 2', price: 60 },
    { name: 'Product 3', price: 40 },
    { name: 'Product 4', price: 100 }
  ];

  const [showExpensive, setShowExpensive] = useState(false);

  const toggleFilter = () => {
    setShowExpensive(!showExpensive);
  };

  const filteredProducts = showExpensive
    ? products.filter(product => product.price > 50)
    : products;

  return (
    <div>
      <h1>{showExpensive ? 'Expensive Products' : 'All Products'}</h1>
      <button onClick={toggleFilter}>
        {showExpensive ? 'Show All Products' : 'Show Expensive Products'}
      </button>
      <ul>
        {filteredProducts.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterArray;
