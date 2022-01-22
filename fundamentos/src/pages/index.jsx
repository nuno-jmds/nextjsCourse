import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const titulo = <h1> É o titulo</h1>;

  function subtitulo() {
    return <h2>{"Esta tag é H2".toLocaleUpperCase()}</h2>;
  }
  return (
    <div>
      {titulo}
      <h1>Hello World</h1>
      {subtitulo()}
      <p>{JSON.stringify({ nome: "Nuno" })}</p>

      <Link href="/estilo"> Estilo</Link>
    </div>
  );
}
