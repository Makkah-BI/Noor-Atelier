import { Request, Response, NextFunction } from "express";

import categoryService from "../services/categoryService";

class CategoryController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const category = await categoryService.create(req.body);

      return res.status(201).json({
        success: true,

        data: category,
      });
    } catch (error) {
      next(error);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const categories = await categoryService.getAll();

      return res.json({
        success: true,

        data: categories,
      });
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const category = await categoryService.getById(req.params.id as string);

      return res.json({
        success: true,

        data: category,
      });
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const category = await categoryService.update(
        req.params.id as string,
        req.body,
      );

      return res.json({
        success: true,

        data: category,
      });
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      await categoryService.delete(req.params.id as string);

      return res.json({
        success: true,

        message: "Category deleted",
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new CategoryController();
