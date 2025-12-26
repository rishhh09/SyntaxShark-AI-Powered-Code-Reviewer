import express from 'express'
import dotenv from 'dotenv'
import router from './routes/aiRoutes.js'
import cors from 'cors'
import { connectDB } from './config/dbConnection.js'
const app = express()
app.use(express.json())
dotenv.config()

app.use(cors())
connectDB()

app.get('/', (req, res)=>{
    res.send("hello")
})

app.use('/ai', router)

const port = process.env.PORT || 5000
app.listen(port, ()=> {
    console.log(`App is listening on ${port}`)
})



