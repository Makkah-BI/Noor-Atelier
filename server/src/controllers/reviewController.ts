import { Request, Response, NextFunction } from "express";
import reviewService from "../services/reviewService";

class ReviewController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const review = await reviewService.create({
        userId: req.user!.id,
        productId: req.body.productId,
        rating: req.body.rating,
        comment: req.body.comment,
      });

      res.status(201).json({
        success: true,
        data: review,
      });
    } catch (error) {
      next(error);
    }
  }

  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const reviews = await reviewService.getByProduct(
        req.params.productId as string,
      );

      res.json({
        success: true,
        data: reviews,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new ReviewController();
