import { Router } from "express";

const rappersRoutes = Router();

let rappers = [
    {
        id: Number(Math.floor(Math.random() * 999999) +1),
        nome: "Beyoncé",
        idade: 43,
        descriçãoFisica : "morena, cabelo loiro, cantora",
        envolvimentoNoCrime: true,
        
    },
    {
        id: Number(Math.floor(Math.random() * 999999) +1),
        nome: "Jay-Z",
        idade: 54,
        descriçãoFisica : "negro, cabelo preto, casado",
        envolvimentoNoCrime: true,
    },
    {
        id: Number(Math.floor(Math.random() * 999999) +1),
        nome: "Justin Bieber",
        idade: 30,
        descriçãoFisica : "branco, cabelo castanho claro, cantor",
        envolvimentoNoCrime: false,
    }, 
    {
        id: Number(Math.floor(Math.random() * 999999) +1),
        nome: "Selena Gomez",
        idade: 32,
        descriçãoFisica : "branca, cabelo castanho escuro, cantora",
        envolvimentoNoCrime: false,
    }
];

// Rota para listar todos os rappers 
rappersRoutes.get("/", (req, res) => {
    return res.status(200).json(rappers);
});

// Rota para buscar um rapper pelo id
rappersRoutes.get("/:id", (req, res) => {
    const { id } = req.params;
});

 // Busca rappers pelo id no array de rappers
 const rapper = rappers.find((rappers) => rappers.id == id);

 // Verifica se os rappers foram encontrados
 if (!rappers) {
   return res
     .status(404)
     .json({ message: `rappers com id ${id} não encontrado!` });
 }

 return res.status(200).json(rappers);

  // Rota para atualizar um rapper pelo id
  rappersRoutes.put("/:id", (req, res) => {
    const { id } = req.params;
    const { nome, idade, descriçãoFisica, envolvimentoNoCrime } = req.body;
  
// Busca rappers pelo id no array de rappers
const rappers = rappers.find((rappers) => rappers.id == id);

});

 // Validação dos campos obrigatórios
 if (!nome || !idade || !envolvimentoNoCrime) {
    return res.status(400).json({
      message: "Os campos nome, idade e envolvimento no crime são obrigatórios!",
    });
  }

  // Validação de existência no envolvimento no crime
  if (envolvimento != "sim" && envolvimento != "não") {
    return res.status(400).send({
      message: "Digite 'sim' ou 'não'!",
    });
  }

  rappers.nome = nome;
  rappers.idade = idade;
  rappers.descriçãoFisica = descriçãoFisica;
  rappers.envolvimentoNoCrime = envolvimentoNoCrime || [];

  return res.status(200).json({
    message: "Rapper atualizado com sucesso!",
    rapper,
  });

  // Validação para verificar se a idade é um número inteiro
  if (Number.isInteger(idade) == false) {
    return res.status(400).send({
      message: "A idade do rapper deve ser um número inteiro!",
    }); 
  };

// Rota para deletar um rapper
rappersRoutes.delete("/:id", (req, res) => {
    const { id } = req.params;

});
  
export default rappersRoutes;