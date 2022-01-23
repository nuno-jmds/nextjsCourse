import styles from "./Navegador.module.css";
import Link from "next/link";

export default function Navegador(props) {
  return (
    <>
      <div className={styles.navegador}>
        <h1>
          <Link href={props.destino}>{props.texto}</Link>
        </h1>
      </div>
    </>
  );
}
