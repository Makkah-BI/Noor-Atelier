import { Request, Response } from "express";
import prisma from "../config/prisma";

class DashboardController {
  async stats(req: Request, res: Response) {
    const [users, products, orders, categories] = await Promise.all([
      prisma.user.count(),
      prisma.product.count(),
      prisma.order.count(),
      prisma.category.count(),
    ]);

    res.json({
      success: true,
      data: {
        users,
        products,
        orders,
        categories,
      },
    });
  }
}

export default new DashboardController();
