import express, {Request, Response} from 'express'
import { getUserByIdServ } from '../services/UserService'

const getUserById = async (req: Request, res: Response) =>{
    try{
        console.log(req.params.id)
        const result = await getUserByIdServ(req.params.id);
        console.log(result)
        res.status(200).json(result)
    }
    catch(err){
        console.log(err)
        res.status(500).json({erro: "Something went wrong!"})
    }
};

export {getUserById}