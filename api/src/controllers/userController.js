import { PrismaClient } from '@prisma/client';
import express from 'express';

const prisma = new PrismaClient()
const routes = express.Router()

routes.get('/', (req, res) => {
  res.send("Hello, world!")
})

routes.get('/frases', async (req, res) => {
  const user = await prisma.frases.findMany()
  res.json(user)
})

routes.get('/frases/:id', async (req, res) => {
  const userId = req.params.id

  const frase = await prisma.frases.findUnique({
    where: {
      id: Number(userId)
    }
  })

  if (!frase) {
    console.log("Frase not found")
  }

  res.json(frase)
})

export default routes