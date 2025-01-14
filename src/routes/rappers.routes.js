import { Router } from "express";

const rappersRoutes = Router();

let rappers = [
    {
        id: Number(Math.floor(Math.random() * 999999) +1),
        nome: "Beyoncé",
        idade: 43,
        descriçãoFisica : "morena, cabelo loiro, cantora",
        envolvimentoNoCrime: "sim",
        
    },
    {
        id: Number(Math.floor(Math.random() * 999999) +1),
        nome: "Jay-Z",
        idade: 54,
        descriçãoFisica : "negro, cabelo preto, casado",
        envolvimentoNoCrime: "sim",
    },
    {
        id: Number(Math.floor(Math.random() * 999999) +1),
        nome: "Justin Bieber",
        idade: 30,
        descriçãoFisica : "branco, cabelo castanho claro, cantor",
        envolvimentoNoCrime: "não",
    }, 
    {
        id: Number(Math.floor(Math.random() * 999999) +1),
        nome: "Selena Gomez",
        idade: 32,
        descriçãoFisica : "branca, cabelo castanho escuro, cantora",
        envolvimentoNoCrime: "não",
    }
];

// Rota para listar todos os rappers
rappersRoutes.get("/", (req, res) => {
  return res.status(200).json(rappers);
});

// Rota para cadastrar um novo rapper
rappersRoutes.post("/", (req, res) => {
  const { nome, idade, descriçãoFisica, envolvimentoNoCrime } = req.body;

  // Validação dos campos obrigatórios
  if (!nome || !idade  || !envolvimentoNoCrime) {
    return res.status(400).json({
      message: "Os campos nome, idade e envolvimentoNoCrime são obrigatórios!",
    });
  }

  // Validação de existência de rapper
  if (envolvimentoNoCrime != "sim" && envolvimentoNoCrime != "não") {
    return res.status(400).send({
      message: "Digite 'sim' ou 'não'! em envolvimentoNoCrime",
    });
  }

  // Validação da idade como um número inteiro
if (Number.isInteger(idade) == false) {
  return res.status(400).send({
    message: "A idade do rapper deve ser um número inteiro!",
  });
}

  // Criação de um novo rapper
  const novoRapper = {
    id: Math.floor(Math.random() * 999999),
    nome,
    idade,
    descriçãoFisica,
    envolvimentoNoCrime,
  };

  // Adiciona o novo rapper ao array de rappers
  rappers.push(novoRapper);

  return res.status(201).json({
    message: "Rapper cadastrado com sucesso!",
    novoRapper,
  });
});

// Rota para buscar um rapper pelo id
rappersRoutes.get("/:id", (req, res) => {
  const { id } = req.params;

  // Busca um rapper pelo id no array de rappers
  const rapper = rappers.find((rapper) => rapper.id == id);

  // Verifica se o rapper foi encontrado
  if (!rapper) {
    return res
      .status(404)
      .json({ message: `Rapper com id ${id} não encontrado!` });
  }

  return res.status(200).json(rapper);
});

// Rota para atualizar um rapper pelo id
rappersRoutes.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nome, idade, descriçãoFisica, envolvimentoNoCrime } = req.body;

  // Busca um rapper pelo id no array de rappers
  const rapper = rappers.find((rapper) => rapper.id == id);

  // Validação dos campos obrigatórios
  if (!nome || !idade || !envolvimentoNoCrime) {
    return res.status(400).json({
      message: "Os campos nome, idade e envolvimentoNoCrime são obrigatórios!",
    });
  }

  // Validação de existência de rapper
  if (envolvimentoNoCrime != "sim" && envolvimentoNoCrime != "não") {
    return res.status(400).send({
      message: "Digite 'sim' ou 'não'! em envolvimentoNoCrime",
    });
  }

  rapper.nome = nome
  rapper.idade = idade
  rapper.descriçãoFisica = descriçãoFisica
  rapper.envolvimentoNoCrime = envolvimentoNoCrime

  return res.status(200).json({
    message: "rapper atualizado com sucesso!",
    rapper,
  });
});

// Rota para deletar um rapper
rappersRoutes.delete("/:id", (req, res) => {
  const { id } = req.params;

  // Busca um rapper pelo id no array de rappers
  const rapper = rappers.find((rapper) => rapper.id == id);

  // Verifica se o rapper foi encontrado
  if (!rapper) {
    return res
      .status(404)
      .json({ message: `Rapper com id ${id} não encontrado!` });
  }

  // Remove o rapper do array de rappers
  rappers = rappers.filter((rapper) => rapper.id != id);

  return res.status(200).json({
    message: "Rapper removido com sucesso!",
    rapper,
  });
});


export default rappersRoutes;