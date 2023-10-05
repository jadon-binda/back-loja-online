import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { log } from 'console'
const prisma = new PrismaClient()

export const listProducts = async (req: Request, res: Response) => {
  const products = await prisma.product.findMany()
  return res.status(200).json(products)
}

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

export const registerProduct = async (req: Request, res: Response) => {
  const { name, price, quantity, description, imageURL } = req.body

  try {
    if (!name || !price || !quantity) {
      return res.status(400).json({ mensagem: 'Informe os campos obrigatórios: nome, preço e quantidade.' })
    }

    await prisma.product.create({
      data: {
        name,
        price: Number(price),
        quantity: Number(quantity),
        description,
        imageURL
      }
    })

    return res.status(201).json({ mensagem: 'Produto cadastrado com sucesso.' })
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
  }
}

// atualizar um produto

// excluir um produto
