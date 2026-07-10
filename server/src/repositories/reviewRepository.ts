import prisma from "../config/prisma";

class ReviewRepository {
  create(data: {
    userId: string;
    productId: string;
    rating: number;
    comment?: string;
  }) {
    return prisma.review.create({
      data,
      include: {
        user: true,
      },
    });
  }

  findByProduct(productId: string) {
    return prisma.review.findMany({
      where: { productId },
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
            avatar: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }
}

export default new ReviewRepository();
