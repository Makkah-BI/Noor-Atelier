import { Router } from "express";

import productController from "../controllers/productController";

const router = Router();

router.post("/", productController.create);

router.get("/", productController.getAll);

router.get("/:id", productController.getById);

router.patch("/:id", productController.update);

router.get("/search", productController.search);

router.delete("/:id", productController.delete);

export default router;
