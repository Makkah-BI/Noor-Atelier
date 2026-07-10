import { Router } from "express";

import paymentController from "../controllers/paymentController";

import authMiddleware from "../middleware/authMiddleware";

const router = Router();

router.use(authMiddleware);

router.post("/pay", paymentController.pay);

export default router;
