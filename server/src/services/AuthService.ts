import prisma from "../config/dbConfig";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();

interface userDetailsType{
    firstName: string
    lastName: string
    address: string
    contact: string
    email: string
    username: string
    password: string
}


const createCustomerServ = async (details: userDetailsType) =>{
    const salt = 10;
    const hashedPassword = await bcrypt.hash(details.password, salt);
    const existingUser  = await prisma.user.findFirst({
        where: { 
            OR: [
                { username: details.username },
                { userdetails: { email: details.email } } 
            ]
        },
        include: {
            userdetails: true 
        }
    });

    if (existingUser ) {
        throw new Error("Username or email already exists");
    }

    await prisma.user.create({
        data:{
            username: details.username,
            password: hashedPassword,
            createdAt: new Date(),
            role: 'Customer',
            isActive: true,
            updatedAt: new Date(),
            userdetails :{
                create:{
                    firstName: details.firstName,
                    lastName: details.lastName,
                    address: details.address,
                    email: details.email,
                    contact: details.contact,
                    imageData: null
                }
            }
        }
    })
}

interface loginCredentialType{
    username: string;
    password: string
}

const secretKey = process.env.MY_TOKEN || "secret_tooken";

const loginAccountServ = async (credentials: loginCredentialType) =>{
    const isUsernameExist = await prisma.user.findUnique({
        where: {username: credentials.username}
    });

    if(!isUsernameExist){
        throw new Error("Not Exist");
    }

    const isMatch = await bcrypt.compare(credentials.password.toString(), isUsernameExist.password);
    if(isMatch){
        const payload = {
            userId: isUsernameExist.userId,
            role: isUsernameExist.role
        };

        const token = jwt.sign(payload, secretKey , {expiresIn: '1d'});
        return token; 
    }
    else{
        throw new Error("Not Match");
    }
}

export { createCustomerServ,loginAccountServ}