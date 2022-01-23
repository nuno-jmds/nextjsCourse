import { useRouter } from "next/router";

export default function ClientePorCodigo(props) {
  const router = useRouter();

  return (
    <>
      <div>
        <h1>filial {router.query.filial}</h1>
        <h1>Cliente {router.query.codigo}</h1>
      </div>
    </>
  );
}
