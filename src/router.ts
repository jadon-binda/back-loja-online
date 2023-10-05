import { Router } from 'express'
import { detailProduct, listProducts, registerProduct } from './controllers/productsController'
const router = Router()

router.get('/products', listProducts)
router.get('/product/:id', detailProduct)
router.post('/product', registerProduct)

export default router