import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import Navegador from "../components/Navegador";

export default function Home() {
  const titulo = <h1> É o titulo</h1>;

  function subtitulo() {
    return <h2>{"Esta tag é H2".toLocaleUpperCase()}</h2>;
  }
  return (
    <div>
      <Navegador destino="/teste" texto="teste"></Navegador>
      <Navegador destino="/exemplo" texto="exemplo"></Navegador>
      <Navegador destino="/cliente/sp-2/123" texto="cliente"></Navegador>
      <Navegador destino="/estado" texto="componente com estado"></Navegador>
      <Navegador destino="/integracao" texto="Integração"></Navegador>

      {titulo}

      <Link href="/estilo"> Estilo</Link>

      <Layout>
        <h1>Hello World</h1>
        {subtitulo()}
        <p>{JSON.stringify({ nome: "Nuno" })}</p>
      </Layout>
    </div>
  );
}
