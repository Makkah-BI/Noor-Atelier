import prisma from "../config/prisma";

class PaymentService {
  async pay(orderId: string) {
    const order = await prisma.order.findUnique({
      where: {
        id: orderId,
      },
    });

    if (!order) {
      throw new Error("Order not found");
    }

    const transactionId = `NOOR-${Date.now()}`;

    const updatedOrder = await prisma.order.update({
      where: {
        id: orderId,
      },
      data: {
        status: "PAID",
        paymentStatus: "PAID",
      },
    });

    return {
      transactionId,
      order: updatedOrder,
    };
  }
}

export default new PaymentService();
