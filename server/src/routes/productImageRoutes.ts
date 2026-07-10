import { Router } from "express";

import upload from "../middleware/upload";

import productImageController from "../controllers/productImageController";

const router = Router();

router.post(
  "/:productId",
  upload.single("image"),
  productImageController.upload,
);

export default router;
