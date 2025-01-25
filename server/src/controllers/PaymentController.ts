
import express, {Request, Response} from 'express'

import { paymentServ } from '../services/PaymentService';

const payment = async (req: Request, res: Response) =>{
  
    try{
        await paymentServ(req.body)
        res.status(201).json({message: "Transaction Complete"})
    }
    catch(err){
        console.log(err)
        res.status(500).json({erro: "Something went wrong!"})
    }
   
};

export {payment}