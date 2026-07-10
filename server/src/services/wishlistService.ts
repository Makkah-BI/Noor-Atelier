import wishlistRepository from "../repositories/wishlistRepository";

class WishlistService {
  add(userId: string, productId: string) {
    return wishlistRepository.create(userId, productId);
  }

  get(userId: string) {
    return wishlistRepository.findByUser(userId);
  }

  remove(id: string) {
    return wishlistRepository.delete(id);
  }
}

export default new WishlistService();
