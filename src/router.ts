import { Router } from 'express'
import { deleteProduct, detailProduct, listProducts, registerProduct, updateProduct } from './controllers/productsController'
const router = Router()

router.get('/products', listProducts)
router.get('/product/:id', detailProduct)
router.post('/product', registerProduct)
router.put('/product/:id', updateProduct)
router.delete('/product/:id', deleteProduct)

export default router