import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const registerOrder = async (req: Request, res: Response) => {
  const { amount } = req.body

  try {
    const order = await prisma.order.create({
      data: {
        amount: Number(amount),
        //status: false,
      }
    })

    return res.status(201).json(order)
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
  }
}

export const listOrders = async (req: Request, res: Response) => {
  try {
    const orders = await prisma.order.findMany()
    return res.json(orders)
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
  }
}

export const detailOrder = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const order = await prisma.order.findUnique({
      where: { id: id }
    })

    if (!order) {
      return res.status(404).json({ mensagem: 'Pedido não encontrado.' })
    }

    return res.json(order)
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
  }
}

export const updateOrder = async (req: Request, res: Response) => {

}

export const deleteOrder = async (req: Request, res: Response) => {

}