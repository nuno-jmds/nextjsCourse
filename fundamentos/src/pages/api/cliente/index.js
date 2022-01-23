export default function handler(req, res) {
  if (req.method === "GET") {
    handleGet(req, res);
  } else {
    res.status(405).send("Request não suportado");
  }
}

function handleGet(req, res) {
  res.status(200).json({
    id: 3,
    nome: "Nuno",
    idade: 30,
  });
}
