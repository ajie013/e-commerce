import prisma from "../config/dbConfig";
import bcrypt from 'bcrypt'

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

export { createCustomerServ}