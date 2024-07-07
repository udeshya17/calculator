import React, { useState } from 'react';
import { evaluate } from 'mathjs'
import './App.css';

function App() {
  const buttons = [7, 8, 9, "+", 4, 5, 6, "-", 3, 2, 1, "*", "C", 0, "=", "/"];

  const [data, setData] = useState("");
  const [result, setResult] = useState(null);

  const handleClick = (event, item) => {
    event.preventDefault(); 
    if (item === "C") {
      setData("");
      setResult(null);
    } else if (item === "=") {
      try {
        setResult(evaluate(data).toString());
      } catch (error) {
        setResult("Error");
      }
    } else {
      setData((prevData) => prevData + item.toString());
    }
  };

  return (
    <div className="head">
      <h1>React Calculator</h1>
      <form>
        <input type="text" readOnly value={data} />
        <p>{result}</p>
        <div className='gridContainer'>
          {buttons.map((item, index) => (
            <button key={index} className="gridItem" onClick={(event) => handleClick(event, item)}>
              {item}
            </button>
          ))}
        </div>
      </form>
    </div>
  );
}

export default App;
