
import express, {} from 'express'
import { getOrderHistory } from '../controllers/OrderController'

const orderRouter = express.Router()

orderRouter.get('/order-history/:id', getOrderHistory)


export default orderRouter