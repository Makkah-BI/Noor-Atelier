import { Router } from "express";
import productVariantController from "../controllers/productVariantController";

const router = Router();

router.post("/products/:productId/variants", productVariantController.create);

router.get(
  "/products/:productId/variants",
  productVariantController.getByProduct,
);

router.patch("/variants/:id", productVariantController.update);

router.delete("/variants/:id", productVariantController.delete);

export default router;
