import { Router } from "express"

const suspeitosRoutes = Router()

let suspeitos = [
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
]

