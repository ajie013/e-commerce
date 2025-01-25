import { getOrderHistoryServ } from '../services/OrderService';
import express, {Request, Response} from 'express'

const getOrderHistory = async (req: Request, res: Response) =>{
    try{
        const result = await getOrderHistoryServ(req.params.id);
        console.log(result)
        res.status(200).json(result)
    }
    catch(err){
        console.log(err)
        res.status(500).json({erro: "Something went wrong!"})
    }
   
};

export {getOrderHistory}