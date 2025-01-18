import { createCustomerServ, loginAccountServ } from "../services/AuthService";
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

const loginAccount = async (req: Request, res: Response) =>{

    console.log(req.body)
    try {
    
        const token = await loginAccountServ(req.body);
        
        res.cookie('token', token,{
            sameSite: 'strict',    
            secure: false  
        })
     
        
        res.status(201).send({ message: "Login Successfully" });
    }
    catch (error) {
        console.error(error); 
        if (error instanceof Error && error.message === "Not Exist") {
            res.status(400).send({ error: "Username does not exist" });
        } 
        else if (error instanceof Error && error.message === "Not Match"){
            res.status(400).send({ error: "Password does not match" });
        }
        else {
            res.status(500).send({ error: "Error in creating a new user" });
        }
    }
};

export {createCustomer,loginAccount}
