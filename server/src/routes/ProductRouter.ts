import { getProductList } from "../controllers/ProductController";
import express, {} from 'express'

const productRouter = express.Router()

productRouter.get('/product-list', getProductList)

export default productRouter