import express from 'express'
import { Prisma } from '@prisma/client'
import { PrismaClient } from './prisma/generated/clientPg'

const prisma = new PrismaClient()
const rotas = express.Router()

// Rota de Cadastro
rotas.post('/cadastro', async (req, res) =>{
    const user = req.body

    await prisma.user.create({
        data:{
            email: user.email,
            name: user.name,
            password
        }
    })

    res.status(201).json(user)
})

export default rotas