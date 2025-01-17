import prisma from "../config/dbConfig"

const getProductListServ = async () =>{
    let productList = await prisma.product.findMany({include:{category: true}});

    return productList
};

export {getProductListServ}