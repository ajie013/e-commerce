import prisma from "../config/dbConfig"

const getProductListServ = async () =>{
    let productList = await prisma.product.findMany({include:{category: true}});
    const list = productList.map((item) =>{
        return {...item, imageData:`http://localhost:3001/public/${item.imageData}`}
    })
    return list
};

export {getProductListServ}