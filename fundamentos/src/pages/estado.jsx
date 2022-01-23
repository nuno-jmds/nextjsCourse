import { useState } from "react";

export default function Estado(props) {
  
    const [numero,setNumero] = useState(0);

  function incrementar() {
    setNumero(numero + 1);
  }

  return (
    <>
      <div>
        <h1>Componente com estado</h1>
        <h2>{numero}</h2>
        <button onClick={incrementar}>Incrementar</button>
      </div>
    </>
  );
}
