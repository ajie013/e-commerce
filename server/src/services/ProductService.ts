import prisma from "../config/dbConfig"

const getProductListServ = async () =>{
    let productList = await prisma.product.findMany({include:{category: true}});
    const list = productList.map((item) =>{
        return {...item, imageData:`http://localhost:3001/public/${item.imageData}`}
    })
    return list
};

const getProductByIdServ = async (id: string) =>{
    const prod = await prisma.product.findUnique({where: {productId : id}, include:{category: true}})

    if(prod && prod.imageData){
        prod.imageData = `http://localhost:3001/public/${prod.imageData}`
    }

    return prod
  
}

export {getProductListServ, getProductByIdServ}