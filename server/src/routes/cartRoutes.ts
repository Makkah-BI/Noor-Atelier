import { Router } from "express";
import cartController from "../controllers/cartController";
import authMiddleware from "../middleware/authMiddleware";

const router = Router();

router.use(authMiddleware);

router.post("/", cartController.add);

router.get("/", cartController.get);

router.patch("/:id", cartController.update);

router.delete("/:id", cartController.remove);

export default router;
