import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
const prisma = new PrismaClient()

export const registerOrder = async (req: Request, res: Response) => {
  const { value } = req.body
  try {
    const order = await prisma.order.create({
      data: {
        value: Number(value),
      }
    })
    return res.status(201).json(order)
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
  }
}

export const listOrders = async (_: Request, res: Response) => {
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
  const { id } = req.params
  const { date, value, status } = req.body
  try {
    const order = await prisma.order.findUnique({
      where: { id: id }
    })

    if (!order) {
      return res.status(404).json({ mensagem: 'Pedido não encontrado.' })
    }

    await prisma.order.update({
      where: { id: id },
      data: {
        date,
        value: Number(value),
        status,
      }
    })

    return res.json({ mensagem: 'Pedido atualizado com sucesso.' })
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
  }
}

export const deleteOrder = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const order = await prisma.order.findUnique({
      where: { id: id }
    })

    if (!order) {
      return res.status(404).json({ mensagem: 'Pedido não encontrado.' })
    }

    await prisma.order.delete({
      where: { id: id }
    })

    return res.json({ mensagem: 'Pedido excluído com sucesso.' })
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
  }
}