import { useState } from "react";
export default function integracao(props) {
  const [cliente, setCliente] = useState({});
  const [codigo, setCodigo] = useState(0);

  function obterCliente() {
    fetch(`http://localhost:3000/api/cliente/${codigo}`)
      .then((resp) => resp.json())
      .then((dados) => setCliente(dados));
  }

  return (
    <>
      <div>
        <input
          type="number"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
        />
        <button onClick={obterCliente}>ObterCliente</button>
      </div>
      <ul>
        <li>Código:{cliente.id}</li>
        <li>Nome: {cliente.nome}</li>
        <li>Email: {cliente.mail}</li>
        <li>Idade: {cliente.idade}</li>
      </ul>
    </>
  );
}
