
import express, {} from 'express'
import { createCustomer } from '../controllers/AuthController'

const authRouter = express.Router()

authRouter.post('/sign-up/create', createCustomer)

export default authRouter