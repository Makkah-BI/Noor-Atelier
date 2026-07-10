import reviewRepository from "../repositories/reviewRepository";

class ReviewService {
  create(data: {
    userId: string;
    productId: string;
    rating: number;
    comment?: string;
  }) {
    return reviewRepository.create(data);
  }

  getByProduct(productId: string) {
    return reviewRepository.findByProduct(productId);
  }
}

export default new ReviewService();
