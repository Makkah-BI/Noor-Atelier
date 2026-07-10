import { Request, Response, NextFunction } from "express";
import cartService from "../services/cartService";

class CartController {
  async add(req: Request, res: Response, next: NextFunction) {
    try {
      const cart = await cartService.add({
        ...req.body,
        userId: req.user!.id,
      });

      res.status(201).json({
        success: true,
        data: cart,
      });
    } catch (error) {
      next(error);
    }
  }

  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const cart = await cartService.get(req.user!.id);

      res.json({
        success: true,
        data: cart,
      });
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const cart = await cartService.update(
        req.params.id as string,
        req.body.quantity,
      );

      res.json({
        success: true,
        data: cart,
      });
    } catch (error) {
      next(error);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction) {
    try {
      await cartService.remove(req.params.id as string);

      res.json({
        success: true,
        message: "Cart item removed",
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new CartController();
