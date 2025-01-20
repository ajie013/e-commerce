import { getProductList, getProductById } from "../controllers/ProductController";
import express, {} from 'express'

const productRouter = express.Router()

productRouter.get('/product-list', getProductList)
productRouter.get('/product/:id', getProductById)

export default productRouter