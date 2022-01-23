import styles from "./Card.module.css";
import Navegador from "./Navegador";

export default function Card(props) {
  return (
    <>
      <div className={styles.card}>
        <Navegador destino={props.dir} texto={props.name}></Navegador>
      </div>
    </>
  );
}
