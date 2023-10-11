import express from 'express'
import router from './router'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(process.env.PORT, () => console.log(`API RESTful server ready at: http://localhost:${process.env.PORT}`))