import express, {Request, Response, NextFunction} from 'express'
import cors from 'cors'
import path from 'path'
import multer from 'multer'
import productRouter from './src/routes/ProductRouter'
import { PrismaClient } from '@prisma/client'
import logger from './src/middleware/logger'
import cookieParser from 'cookie-parser'
import authRouter from './src/routes/AuthRouter'
import userRouter from './src/routes/UserRouter'


const app = express()
const PORT = 3001

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ["POST", 'GET','PUT', 'DELETE'],
    credentials: true
}));
app.use(cookieParser())
app.use(express.json());

app.use('/public', express.static(path.join(__dirname, 'public')));


// const storage = multer.diskStorage({
    
//     destination: function (req, file, cb) {
//       const uploadPath = path.join(__dirname, 'public');
//       cb(null, uploadPath)
//     },
//     filename: function (req, file, cb) {
  
//       cb(null,file.originalname)
//     }
// })
  
// const upload = multer({ storage })

app.use(logger)
app.use(userRouter)
app.use(productRouter)
app.use(authRouter)

app.listen(PORT, () =>{
    console.log(`Server is running at ${PORT}`)
})