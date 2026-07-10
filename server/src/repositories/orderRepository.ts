import prisma from "../config/prisma";

class OrderRepository {
  create(data: {
    userId: string;
    total: number;
    items: {
      productId: string;
      variantId?: string;
      quantity: number;
      price: number;
    }[];
  }) {
    return prisma.order.create({
      data: {
        userId: data.userId,
        total: data.total,
        items: {
          create: data.items,
        },
      },
      include: {
        items: {
          include: {
            product: true,
            variant: true,
          },
        },
      },
    });
  }

  findByUser(userId: string) {
    return prisma.order.findMany({
      where: {
        userId,
      },
      include: {
        items: {
          include: {
            product: true,
            variant: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  updateStatus(id: string, status: any) {
    return prisma.order.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });
  }

  findAll() {
    return prisma.order.findMany({
      include: {
        user: true,
        items: {
          include: {
            product: true,
          },
        },
      },
    });
  }
}

export default new OrderRepository();
