import { Router } from 'express'
import { detailProduct, listProducts, registerProduct, updateProduct } from './controllers/productsController'
const router = Router()

router.get('/products', listProducts)
router.get('/product/:id', detailProduct)
router.post('/product', registerProduct)
router.put('/product/:id', updateProduct)

export default router