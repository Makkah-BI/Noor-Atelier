import prisma from "../config/prisma";

class ProductImageRepository {
  async create(data: { url: string; altText?: string; productId: string }) {
    return prisma.productImage.create({
      data,
    });
  }

  async delete(id: string) {
    return prisma.productImage.delete({
      where: {
        id,
      },
    });
  }

  async findByProduct(productId: string) {
    return prisma.productImage.findMany({
      where: {
        productId,
      },
    });
  }
}

export default new ProductImageRepository();
