import prisma from "../config/prisma";

class ProductVariantRepository {
  async create(data: {
    productId: string;
    size: string;
    color: string;
    stock: number;
  }) {
    return prisma.productVariant.create({
      data,
    });
  }

  async findByProduct(productId: string) {
    return prisma.productVariant.findMany({
      where: { productId },
      orderBy: { createdAt: "desc" },
    });
  }

  async update(
    id: string,
    data: {
      size?: string;
      color?: string;
      stock?: number;
    },
  ) {
    return prisma.productVariant.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return prisma.productVariant.delete({
      where: { id },
    });
  }
}

export default new ProductVariantRepository();
