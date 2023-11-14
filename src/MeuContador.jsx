import { useState } from "react";

export default function MeuContador() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador + 1);
  }

  function diminuir() {
    setContador(contador - 1);
  }

  if (contador > 5) {
    return (
      <div>
        <h1>Valor muito alto!</h1>
        <button onClick={aumentar}>aumentar</button>
        <button onClick={diminuir}>diminuir</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Meu Contador:</h1>
      <h3>{contador}</h3>
      <button onClick={aumentar}>aumentar</button>
      <button onClick={diminuir}>diminuir</button>
    </div>
  );
}
