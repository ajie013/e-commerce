
import express, {} from 'express'
import { payment } from '../controllers/PaymentController'
const paymentRouter = express.Router()

paymentRouter.post('/payment', payment)


export default paymentRouter