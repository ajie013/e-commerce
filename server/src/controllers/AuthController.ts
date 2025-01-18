import { createCustomerServ } from "../services/AuthService";
import express, {Request, Response} from 'express'



const createCustomer = async (req: Request, res: Response) =>{

    console.log(req.body)
    try{
       
        const result = await createCustomerServ(req.body);
      
        res.status(200).json({message: "Succesfully created a new user"})
    }
    catch(err){
        console.log(err)
        res.status(500).json({erro: "Something went wrong!"})
    }
   
};

export {createCustomer}
