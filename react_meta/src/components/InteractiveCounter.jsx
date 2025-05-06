import React from "react";
import { useState } from "react";

function InteractiveCounter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    // const count = count + 1;   -> DON'T DO: React rendered nicht neu
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div className="border border-blue-500 p-4 rounded">
      <p className="mb-2">Zähler: {count}</p>
      <button onClick={increaseCount} className="bg-green-500 hover:bg-green-700 text-white py-1 px-3 rounded">
        +1
      </button>
    </div>
  );
}

export default InteractiveCounter;
