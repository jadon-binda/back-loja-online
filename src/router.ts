import { Router } from 'express'
import { listProducts } from './controllers/productsController'
const router = Router()

router.get('/products', listProducts)

export default router