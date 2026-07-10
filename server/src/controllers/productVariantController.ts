import { Request, Response, NextFunction } from "express";
import productVariantService from "../services/productVariantService";

class ProductVariantController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const variant = await productVariantService.create({
        ...req.body,
        productId: req.params.productId as string,
      });

      res.status(201).json({
        success: true,
        data: variant,
      });
    } catch (error) {
      next(error);
    }
  }

  async getByProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const variants = await productVariantService.getByProduct(
        req.params.productId as string,
      );

      res.json({
        success: true,
        data: variants,
      });
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const variant = await productVariantService.update(
        req.params.id as string,
        req.body,
      );

      res.json({
        success: true,
        data: variant,
      });
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      await productVariantService.delete(req.params.id as string);

      res.json({
        success: true,
        message: "Variant deleted",
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new ProductVariantController();
