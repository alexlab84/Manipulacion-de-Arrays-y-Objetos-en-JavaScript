function Destructuring() {
    const person = { name: "Alice", age: 25, location: "New York" };
    const fruits = ["Apple", "Banana", "Cherry"];
  
    // Destructuración de objeto
    const { name, age, location } = person;
  
    // Destructuración de array
    const [firstFruit, secondFruit, thirdFruit] = fruits;
  
    return (
      <div>
        <h1>Ejemplo de Destructuración</h1>
        <h2>Destructuración de un objeto:</h2>
        <p>Nombre: {name}</p>
        <p>Edad: {age}</p>
        <p>Ubicación: {location}</p>
  
        <h2>Destructuración de un array:</h2>
        <p>Fruta 1: {firstFruit}</p>
        <p>Fruta 2: {secondFruit}</p>
        <p>Fruta 3: {thirdFruit}</p>
      </div>
    );
  }
  
  export default Destructuring;
  