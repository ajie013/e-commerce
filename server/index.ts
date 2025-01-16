import express, {Request, Response, NextFunction} from 'express'
import cors from 'cors'

const app = express()
const PORT = 3000

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST']
}));

app.listen(PORT, () =>{
    console.log(`Server is running at ${PORT}`)
})