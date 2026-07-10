import prisma from "../config/prisma";

class CartRepository {
  create(data: {
    userId: string;
    productId: string;
    variantId?: string;
    quantity: number;
  }) {
    return prisma.cartItem.create({
      data,
      include: {
        product: {
          include: {
            images: true,
            category: true,
          },
        },
        variant: true,
      },
    });
  }

  findByUser(userId: string) {
    return prisma.cartItem.findMany({
      where: {
        userId,
      },
      include: {
        product: {
          include: {
            images: true,
            category: true,
          },
        },
        variant: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  update(id: string, quantity: number) {
    return prisma.cartItem.update({
      where: {
        id,
      },
      data: {
        quantity,
      },
    });
  }

  delete(id: string) {
    return prisma.cartItem.delete({
      where: {
        id,
      },
    });
  }
}

export default new CartRepository();
