import { Request, Response, NextFunction } from "express";

import paymentService from "../services/paymentService";

class PaymentController {
  async pay(req: Request, res: Response, next: NextFunction) {
    try {
      const payment = await paymentService.pay(req.body.orderId);

      res.json({
        success: true,
        message: "Payment Successful",
        data: payment,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new PaymentController();
