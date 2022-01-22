import styles from "../styles/Estilo.module.css";
import Link from "next/link";
export default function Estilo() {
  return (
    <div className={styles.roxo}>
      <h1> Estilo usando modulos </h1>
      <Link href="/"> Voltar</Link>
    </div>
  );
}
