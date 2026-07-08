import categoryRepository from "../repositories/categoryRepository";

import AppError from "../errors/AppError";

import { HTTP_STATUS } from "../constants/httpStatus";

class CategoryService {
  async create(data: {
    name: string;
    slug: string;
    description?: string;
    image?: string;
  }) {
    const existing = await categoryRepository.findBySlug(data.slug);

    if (existing) {
      throw new AppError("Category already exists", HTTP_STATUS.CONFLICT);
    }

    return categoryRepository.create(data);
  }

  async getAll() {
    return categoryRepository.findAll();
  }

  async getById(id: string) {
    const category = await categoryRepository.findById(id);

    if (!category) {
      throw new AppError("Category not found", HTTP_STATUS.NOT_FOUND);
    }

    return category;
  }

  async update(
    id: string,
    data: {
      name?: string;
      slug?: string;
      description?: string;
      image?: string;
    },
  ) {
    await this.getById(id);

    return categoryRepository.update(id, data);
  }

  async delete(id: string) {
    await this.getById(id);

    return categoryRepository.delete(id);
  }
}

export default new CategoryService();
