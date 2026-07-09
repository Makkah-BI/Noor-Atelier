import { Request, Response, NextFunction } from "express";

import productService from "../services/productService";

class ProductController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const product = await productService.create(req.body);

      return res.status(201).json({
        success: true,

        data: product,
      });
    } catch (error) {
      next(error);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await productService.getAll();

      return res.json({
        success: true,

        data: products,
      });
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const product = await productService.getById(req.params.id as string);

      return res.json({
        success: true,

        data: product,
      });
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const product = await productService.update(
        req.params.id as string,
        req.body,
      );

      return res.json({
        success: true,

        data: product,
      });
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      await productService.delete(req.params.id as string);

      return res.json({
        success: true,

        message: "Product deleted",
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new ProductController();
