import prisma from "../config/dbConfig";

const getUserByIdServ = async (id: string) =>{
    const user = await prisma.user.findUnique({
        where: {userId: id },
        include:{userdetails: true}
    });

   
     if (user && user.userdetails) {
       
        user.userdetails.imageData = `http://localhost:3001/public/${user.userdetails.imageData}`;
    }

    return user
};

export {getUserByIdServ}