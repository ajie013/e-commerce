import { create } from "domain";
import prisma from "../config/dbConfig"

interface  paymentType{
    userId: string;
    deliveryFee: number
    
}

interface summaryType{
    discount: number
    totalAmount: number;
    grandTotal: number;
    userId: string
    paymentMethod: string;
    deliveryFee: number
}

interface cartType {
    productName: string;
    productId: string;
    quantity: number;
    price: number;
    imageData : string
}

const paymentServ = async ({ summary, cart }: { summary: summaryType, cart: cartType[] }) => {
    try {
      
        const order = await prisma.order.create({
            data: {
                userId: summary.userId,
                totalAmount: summary.grandTotal,
                shippingCost: summary.deliveryFee,
                orderDate: new Date(),
                paymentMethod: summary.paymentMethod,
                discount: summary.discount,
                address: 'TESTIN ADDRESS',
                status: "Processing",
            }
        });

       
        const orderItemsPromises = cart.map((item) => {
            return prisma.orderItems.create({
                data: {
                    orderId: order.orderId,
                    producId: item.productId, 
                    quantity: item.quantity,
                    price: item.price
                }
            });
        });

      
        await Promise.all(orderItemsPromises);

        console.log('Order and order items saved successfully');
    } catch (error) {
        console.error('Error saving order or order items:', error);
    }
};
export {paymentServ}