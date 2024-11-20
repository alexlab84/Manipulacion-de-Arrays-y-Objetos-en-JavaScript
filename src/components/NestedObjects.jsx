import { useState } from "react";

function NestedObjects() {
  const [user, setUser] = useState({
    id: 1,
    name: "Alice",
    address: {
      street: "123 Main St",
      city: "New York",
      zip: "10001",
    },
    preferences: {
      theme: "dark",
      language: "English",
    },
  });

  const updateCity = () => {
    setUser((prevUser) => ({
      ...prevUser,
      address: {
        ...prevUser.address,
        city: "Los Angeles",
      },
    }));
  };

  return (
    <div>
      <h1>Ejemplo de Objetos Anidados</h1>
      <h2>Usuario:</h2>
      <p>Nombre: {user.name}</p>
      <p>Ciudad: {user.address.city}</p>
      <p>Idioma: {user.preferences.language}</p>

      <button onClick={updateCity}>Cambiar ciudad a Los Angeles</button>
    </div>
  );
}

export default NestedObjects;
