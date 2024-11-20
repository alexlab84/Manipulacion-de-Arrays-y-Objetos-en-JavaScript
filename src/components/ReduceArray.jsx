import { useState } from "react";

function ReduceArray() {
  const numbers = [10, 20, 30, 40, 50];
  const [totalSum, setTotalSum] = useState(null);

  const calculateSum = () => {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    setTotalSum(sum);
  };

  return (
    <div>
      <h1>Ejemplo de .reduce()</h1>
      <p>Array: [{numbers.join(", ")}]</p>
      <button onClick={calculateSum}>Calcular Suma</button>
      {totalSum !== null && <p>Suma Total: {totalSum}</p>}
    </div>
  );
}

export default ReduceArray;
