import { useState } from "react";

function SortArray() {
  const [people, setPeople] = useState([
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 20 },
    { id: 3, name: "Charlie", age: 30 },
  ]);

  const sortByAge = () => {
    const sortedPeople = [...people].sort((a, b) => a.age - b.age);
    setPeople(sortedPeople);
  };

  return (
    <div>
      <h1>Ordenar Array por Edad</h1>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            {person.name} - {person.age} años
          </li>
        ))}
      </ul>
      <button onClick={sortByAge}>Ordenar por Edad</button>
    </div>
  );
}

export default SortArray;
