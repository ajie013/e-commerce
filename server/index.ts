import express, {Request, Response, NextFunction} from 'express'
import cors from 'cors'
import path from 'path'
import multer from 'multer'
import productRouter from './src/routes/ProductRouter'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
const app = express()
const PORT = 3001

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST']
}));
app.use('/public', express.static(path.join(__dirname, 'public')));

enum user_role {
    ADMIN,
    CUSTOMER
}
  

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

app.use(productRouter)

app.listen(PORT, () =>{
    console.log(`Server is running at ${PORT}`)
})