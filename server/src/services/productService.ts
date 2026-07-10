import productRepository from "../repositories/productRepository";

import { CreateProductDTO, UpdateProductDTO } from "../types/product";

import AppError from "../errors/AppError";

import { HTTP_STATUS } from "../constants/httpStatus";

class ProductService {
  async create(data: CreateProductDTO) {
    const existing = await productRepository.findBySlug(data.slug);

    if (existing) {
      throw new AppError("Product already exists", HTTP_STATUS.CONFLICT);
    }

    return productRepository.create(data);
  }

  async getAll() {
    return productRepository.findAll();
  }

  async getById(id: string) {
    const product = await productRepository.findById(id);

    if (!product) {
      throw new AppError("Product not found", HTTP_STATUS.NOT_FOUND);
    }

    return product;
  }

  async update(id: string, data: UpdateProductDTO) {
    await this.getById(id);

    return productRepository.update(id, data);
  }

  async delete(id: string) {
    await this.getById(id);

    return productRepository.delete(id);
  }
}

export default new ProductService();
