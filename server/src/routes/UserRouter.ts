import { getUserById } from '../controllers/UserController'
import express, {} from 'express'

const userRouter = express.Router()

userRouter.get('/user/:id', getUserById)

export default userRouter