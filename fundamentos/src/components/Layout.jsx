import Link from "next/link";
import styles from '../styles/Layout.module.css'
export default function Layout(props) {


  return (
    <div className={styles.layout}>

        <div className={styles.leftblock}>

            Olá

<h1>    {props.titulo ?? "Não tem titulo"}</h1>

            {props.children}
        </div>
      <div className={styles.rightblock}> 
                <Link href="/">Voltar</Link>

      {props.children}
      </div >

    </div>
  );
}
