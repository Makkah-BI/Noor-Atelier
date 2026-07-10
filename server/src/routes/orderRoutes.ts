import { Router } from "express";
import orderController from "../controllers/orderController";
import authMiddleware from "../middleware/authMiddleware";

const router = Router();

router.use(authMiddleware);

router.post("/", orderController.create);

router.get("/me", orderController.myOrders);

router.get("/", orderController.all);

router.patch("/:id/status", orderController.updateStatus);

export default router;
