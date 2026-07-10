import prisma from "../config/prisma";

class WishlistRepository {
  create(userId: string, productId: string) {
    return prisma.wishlist.create({
      data: {
        userId,
        productId,
      },
      include: {
        product: {
          include: {
            images: true,
            category: true,
          },
        },
      },
    });
  }

  findByUser(userId: string) {
    return prisma.wishlist.findMany({
      where: { userId },
      include: {
        product: {
          include: {
            images: true,
            category: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  delete(id: string) {
    return prisma.wishlist.delete({
      where: {
        id,
      },
    });
  }
}

export default new WishlistRepository();
