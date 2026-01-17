import { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const add = (value) => {
    setExpression(prev => prev + value);
  };

  const clear = () => {
    setExpression("");
    setResult(null);
    setError(null);
  };

  const calculate = () => {
    try {
      // eslint-disable-next-line no-new-func
      const value = Function(`"use strict"; return (${expression})`)();
      setResult(value);
      setError(null);
    } catch {
      setError("Błąd wyrażenia");
      setResult(null);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        {expression || "0"}
      </div>

      <div className="buttons">
        {["1","2","3","+"].map(v => (
          <button key={v} onClick={() => add(v)}>{v}</button>
        ))}
        {["4","5","6","-"].map(v => (
          <button key={v} onClick={() => add(v)}>{v}</button>
        ))}
        {["7","8","9","/"].map(v => (
          <button key={v} onClick={() => add(v)}>{v}</button>
        ))}
        {["(","0",")","="].map(v => (
          <button
            key={v}
            onClick={v === "=" ? calculate : () => add(v)}
          >
            {v}
          </button>
        ))}
      </div>

      <button className="clear" onClick={clear}>C</button>

      {result !== null && <p className="result">Wynik: {result}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
}
