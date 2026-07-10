import { Request, Response, NextFunction } from "express";
import wishlistService from "../services/wishlistService";

class WishlistController {
  async add(req: Request, res: Response, next: NextFunction) {
    try {
      const wishlist = await wishlistService.add(
        req.user!.id,
        req.body.productId,
      );

      res.status(201).json({
        success: true,
        data: wishlist,
      });
    } catch (error) {
      next(error);
    }
  }

  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const wishlist = await wishlistService.get(req.user!.id);

      res.json({
        success: true,
        data: wishlist,
      });
    } catch (error) {
      next(error);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction) {
    try {
      await wishlistService.remove(req.params.id as string);

      res.json({
        success: true,
        message: "Wishlist item removed",
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new WishlistController();
