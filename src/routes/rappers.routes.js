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

 // Busca um rappers pelo id no array de rappers
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
  
// Busca um rappers pelo id no array de rappers
const rappers = rappers.find((rappers) => rappers.id == id);

});
  
export default rappersRoutes;