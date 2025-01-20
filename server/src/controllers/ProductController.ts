import { getProductListServ, getProductByIdServ } from "../services/ProductService";
import express, {Request, Response} from 'express'



const getProductList = async (req: Request, res: Response) =>{
    try{
        const result = await getProductListServ();
      
        res.status(200).json(result)
    }
    catch(err){
        console.log(err)
        res.status(500).json({erro: "Something went wrong!"})
    }
   
};

const getProductById = async (req: Request, res: Response) =>{
    try{
        const result = await getProductByIdServ(req.params.id);
      
        res.status(200).json(result)
    }
    catch(err){
        console.log(err)
        res.status(500).json({erro: "Something went wrong!"})
    }
   
};

export {getProductList, getProductById}
