export default function handler(req, res) {
  if (req.method === "GET") {
    handleGet(req, res);
  } else {
    res.status(405).send("Request não suportado");
  }
}

function handleGet(req, res) {
  const codigo = req.query.codigo;
  res.status(200).json({
    id: codigo,
    nome: `Nuno ${codigo}`,
    mail: `Nuno${codigo}@mail.com`,
    idade: 30,
  });
}
