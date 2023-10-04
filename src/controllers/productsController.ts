import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const listProducts = async (req: Request, res: Response) => {
  const products = await prisma.product.findMany()
  return res.status(200).json(products)
}

// listar um produto

// criação de um produto

// atualizar um produto

// excluir um produto
