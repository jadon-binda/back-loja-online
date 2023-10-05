import { Router } from 'express'
import { detailProduct, listProducts } from './controllers/productsController'
const router = Router()

router.get('/products', listProducts)
router.get('/product/:id', detailProduct)

export default router