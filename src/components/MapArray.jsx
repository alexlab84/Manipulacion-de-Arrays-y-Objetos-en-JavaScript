// MapArray.js
import { useState } from 'react';

function MapArray() {
  const [messages, setMessages] = useState([]);
  
  const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];

  const generateMessages = () => {
    const newMessages = people.map(person => `${person.name} tiene ${person.age} años`);
    setMessages(newMessages);
  };

  return (
    <div>
      <h2>Ejemplo de .map() para transformar arrays</h2>
      <button onClick={generateMessages}>Generar Mensajes</button>
      <ul>
        {messages.map((message, index) => <li key={index}>{message}</li>)}
      </ul>
    </div>
  );
}

export default MapArray;
