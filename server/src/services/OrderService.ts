import prisma from "../config/dbConfig";


const getOrderHistoryServ = async (id: string) =>{
    
    let orderHistoryList = await prisma.order.findMany({
        where:{userId: id},
        include:{orderitem: {include: {product: true}}}
    })
    
    return orderHistoryList
}

export  {getOrderHistoryServ}