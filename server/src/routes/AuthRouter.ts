
import express, {} from 'express'
import { createCustomer, loginAccount } from '../controllers/AuthController'

const authRouter = express.Router()

authRouter.post('/sign-up/create', createCustomer)
authRouter.post('/login/validate', loginAccount)

export default authRouter