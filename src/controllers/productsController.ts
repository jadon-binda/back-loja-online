import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
const prisma = new PrismaClient()

export const listProducts = async (_: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany()
    return res.json(products)
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
  }
}

export const detailProduct = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const product = await prisma.product.findUnique({
      where: { id: Number(id) },
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
  const { name, price, description, imageURL, stock } = req.body
  try {
    if (!name || !price) {
      return res.status(400).json({ mensagem: 'Informe os campos obrigatórios: nome, preço e quantidade.' })
    }
    const newProduct = await prisma.product.create({
      data: {
        name,
        price: Number(price),
        description,
        imageURL,
        stock: Number(stock),
      }
    })
    return res.status(201).json(newProduct)
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
  }
}

export const updateProduct = async (req: Request, res: Response) => {
  const { name, price, description, imageURL, stock } = req.body
  const { id } = req.params
  try {
    const product = await prisma.product.findUnique({
      where: { id: Number(id) },
    })
    if (!product) {
      return res.status(404).json({ mensagem: 'Produto não encontrado.' })
    }
    await prisma.product.update({
      where: { id: Number(id) },
      data: {
        name,
        price: Number(price),
        description,
        imageURL,
        stock: Number(stock),
      }
    })
    return res.json({ mensagem: 'Produto atualizado com sucesso.' })
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
  }
}

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const product = await prisma.product.findUnique({
      where: { id: Number(id) }
    })
    if (!product) {
      return res.status(404).json({ mensagem: 'Produto não encontrado.' })
    }
    await prisma.product.delete({
      where: { id: Number(id) }
    })
    return res.json({ mensagem: 'Produto excluído com sucesso.' })
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
  }
}