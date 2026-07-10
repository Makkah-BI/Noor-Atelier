import cartRepository from "../repositories/cartRepository";

class CartService {
  add(data: {
    userId: string;
    productId: string;
    variantId?: string;
    quantity: number;
  }) {
    return cartRepository.create(data);
  }

  get(userId: string) {
    return cartRepository.findByUser(userId);
  }

  update(id: string, quantity: number) {
    return cartRepository.update(id, quantity);
  }

  remove(id: string) {
    return cartRepository.delete(id);
  }
}

export default new CartService();
