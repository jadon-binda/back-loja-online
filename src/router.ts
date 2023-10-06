import { Router } from 'express'
import { deleteOrder, detailOrder, listOrders, registerOrder, updateOrder } from './controllers/ordersController'
import { deleteProduct, detailProduct, listProducts, registerProduct, updateProduct } from './controllers/productsController'
const router = Router()

router.get('/product', listProducts)
router.get('/product/:id', detailProduct)
router.post('/product', registerProduct)
router.put('/product/:id', updateProduct)
router.delete('/product/:id', deleteProduct)

router.get('/order', listOrders)
router.get('/order/:id', detailOrder)
router.post('/order', registerOrder)
router.put('/order/:id', updateOrder)
router.delete('/order/:id', deleteOrder)

export default router