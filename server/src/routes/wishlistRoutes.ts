import { Router } from "express";

import wishlistController from "../controllers/wishlistController";
import authMiddleware from "../middleware/authMiddleware";

const router = Router();

router.use(authMiddleware);

router.post("/", wishlistController.add);

router.get("/", wishlistController.get);

router.delete("/:id", wishlistController.remove);

export default router;
