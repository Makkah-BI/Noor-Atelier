import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes";

import errorMiddleware from "./middleware/errorMiddleware";

import categoryRoutes from "./routes/categoryRoutes";

import productRoutes from "./routes/productRoutes";

import productImageRoutes from "./routes/productImageRoutes";

import productVariantRoutes from "./routes/productVariantRoutes";

import wishlistRoutes from "./routes/wishlistRoutes";

import cartRoutes from "./routes/cartRoutes";

import orderRoutes from "./routes/orderRoutes";

import paymentRoutes from "./routes/paymentRoutes";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.use("/api/auth", authRoutes);

app.use("/api/categories", categoryRoutes);

app.use("/api/products", productRoutes);

app.use("/api/product-images", productImageRoutes);

app.use("/api", productVariantRoutes);

app.use("/api/wishlist", wishlistRoutes);

app.use("/api/cart", cartRoutes);

app.use("/api/orders", orderRoutes);

app.use("/api/payments", paymentRoutes);

app.use(errorMiddleware);

export default app;
