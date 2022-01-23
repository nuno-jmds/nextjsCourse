// http://localhost:3000/teste
import Header from "../components/Header";
import Navegador from "../components/Navegador";
import Link from "next/link";
import Layout from "../components/Layout"

export default function Teste(props) {
  const titulo = <h1> É o titulo</h1>;

  function subtitulo() {
    return <h2>{"Esta tag é H2".toLocaleUpperCase()}</h2>;
  }
  return (
    <>

      <Navegador destino="/teste" texto="teste"></Navegador>
      <Navegador destino="/exemplo" texto="exemplo"></Navegador>
      <Navegador destino="/cliente/sp-2/123" texto="cliente"></Navegador>
      <Navegador destino="/estado" texto="componente com estado"></Navegador>
      <Navegador destino="/integracao" texto="Integração"></Navegador>

      {titulo}

      <Link href="/estilo">Estilo</Link>

      <Layout>
        <h1>Hello World</h1>
        {subtitulo()}
        <p>{JSON.stringify({ nome: "Nuno" })}</p>
      </Layout>
    </>
  );
}
