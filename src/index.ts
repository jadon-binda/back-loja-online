import express from 'express'

const app = express()
const router = require('./router')

app.use(express.json())
app.use('/', router)

app.listen(process.env.PORT, () => console.log(`API RESTful server ready at: http://localhost:${process.env.PORT}`))