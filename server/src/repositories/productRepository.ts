import prisma from "../config/prisma";
import { CreateProductDTO, UpdateProductDTO } from "../types/product";

class ProductRepository {
  async create(data: CreateProductDTO) {
    return prisma.product.create({
      data,

      include: {
        category: true,
        images: true,
        variants: true,
      },
    });
  }

  async findAll() {
    return prisma.product.findMany({
      include: {
        category: true,
        images: true,
        variants: true,
      },

      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async findById(id: string) {
    return prisma.product.findUnique({
      where: {
        id,
      },

      include: {
        category: true,

        images: true,

        variants: true,
      },
    });
  }

  async findBySlug(slug: string) {
    return prisma.product.findUnique({
      where: {
        slug,
      },
    });
  }

  async update(id: string, data: UpdateProductDTO) {
    return prisma.product.update({
      where: {
        id,
      },

      data,

      include: {
        category: true,

        images: true,

        variants: true,
      },
    });
  }

  async search(search?: string, categoryId?: string) {
    return prisma.product.findMany({
      where: {
        AND: [
          search
            ? {
                name: {
                  contains: search,
                  mode: "insensitive",
                },
              }
            : {},

          categoryId
            ? {
                categoryId,
              }
            : {},
        ],
      },

      include: {
        images: true,
        category: true,
        variants: true,
      },
    });
  }

  async delete(id: string) {
    return prisma.product.delete({
      where: {
        id,
      },
    });
  }
}

export default new ProductRepository();
