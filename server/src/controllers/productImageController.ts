import { Request, Response, NextFunction } from "express";

import productImageService from "../services/productImageService";

class ProductImageController {
  async upload(req: Request, res: Response, next: NextFunction) {
    try {
      const image = await productImageService.upload(
        req.file!,
        req.params.productId as string,
      );

      return res.status(201).json({
        success: true,
        data: image,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new ProductImageController();
