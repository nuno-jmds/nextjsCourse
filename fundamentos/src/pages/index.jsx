import Header from "../components/Header";
import Card from "../components/Card";
import styles from "../styles/index.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.list}>
        <Card dir="/estado" name="Estado"></Card>
        <Card dir="/estilo" name="Estilo"></Card>
        <Card dir="/exemplo" name="Exemplo"></Card>
      </div>

      <div className={styles.list}>
        <Card dir="/integracao" name="Integracao"></Card>
        <Card dir="/cliente/Aveiro/Nuno" name="Cliente por Código"></Card>
        <Card dir="/teste" name="Teste"></Card>
      </div>
    </div>
  );
}
