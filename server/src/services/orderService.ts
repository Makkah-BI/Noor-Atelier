import orderRepository from "../repositories/orderRepository";

class OrderService {
  create(data: {
    userId: string;
    total: number;
    items: {
      productId: string;
      variantId?: string;
      quantity: number;
      price: number;
    }[];
  }) {
    return orderRepository.create(data);
  }

  getMine(userId: string) {
    return orderRepository.findByUser(userId);
  }

  getAll() {
    return orderRepository.findAll();
  }

  updateStatus(id: string, status: any) {
    return orderRepository.updateStatus(id, status);
  }
}

export default new OrderService();
