import { useState } from "react";
import styles from './button.module.css'

export default function MeuContador2() {
    
  const [contador2, setContador2] = useState(0);

  function aumentar() {
    setContador2(contador2 + 1);
  }

   
  return (
    <div className="container">
      <h1>Meu Contador:</h1>
      <h3>{contador2}</h3>
      <button className={styles.myButton}onClick={aumentar}>aumentar</button>
    </div>
  );
}
