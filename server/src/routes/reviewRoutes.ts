import { Router } from "express";

import reviewController from "../controllers/reviewController";
import authMiddleware from "../middleware/authMiddleware";

const router = Router();

router.post("/", authMiddleware, reviewController.create);

router.get("/:productId", reviewController.get);

export default router;
