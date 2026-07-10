import { Request, Response, NextFunction } from "express";
import orderService from "../services/orderService";

class OrderController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const order = await orderService.create({
        ...req.body,
        userId: req.user!.id,
      });

      res.status(201).json({
        success: true,
        data: order,
      });
    } catch (error) {
      next(error);
    }
  }

  async myOrders(req: Request, res: Response, next: NextFunction) {
    try {
      const orders = await orderService.getMine(req.user!.id);

      res.json({
        success: true,
        data: orders,
      });
    } catch (error) {
      next(error);
    }
  }

  async all(req: Request, res: Response, next: NextFunction) {
    try {
      const orders = await orderService.getAll();

      res.json({
        success: true,
        data: orders,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const order = await orderService.updateStatus(
        req.params.id as string,
        req.body.status,
      );

      res.json({
        success: true,
        data: order,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new OrderController();
