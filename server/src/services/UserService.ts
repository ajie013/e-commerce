import prisma from "../config/dbConfig";

const getUserByIdServ = async (id: string) =>{
    const user = await prisma.user.findUnique({
        where: {userId: id },
        include:{userdetails: true}
    });

    return user
};

export {getUserByIdServ}