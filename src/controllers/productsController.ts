import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { log } from 'console'
const prisma = new PrismaClient()

export const listProducts = async (req: Request, res: Response) => {
  const products = await prisma.product.findMany()
  return res.status(200).json(products)
}

// listar um produto
export const detailProduct = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const product = await prisma.product.findUnique({
      where: { id: id },
    })

    if (!product) {
      return res.status(404).json({ mensagem: 'Produto não encontrado.' })
    }
    return res.json(product)
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
  }
}

// criação de um produto

// atualizar um produto

// excluir um produto
