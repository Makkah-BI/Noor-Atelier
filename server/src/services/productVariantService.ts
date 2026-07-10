import productVariantRepository from "../repositories/productVariantRepository";

class ProductVariantService {
  create(data: {
    productId: string;
    size: string;
    color: string;
    stock: number;
  }) {
    return productVariantRepository.create(data);
  }

  getByProduct(productId: string) {
    return productVariantRepository.findByProduct(productId);
  }

  update(
    id: string,
    data: {
      size?: string;
      color?: string;
      stock?: number;
    },
  ) {
    return productVariantRepository.update(id, data);
  }

  delete(id: string) {
    return productVariantRepository.delete(id);
  }
}

export default new ProductVariantService();
