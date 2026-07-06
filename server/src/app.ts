import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes";

import errorMiddleware from "./middleware/errorMiddleware";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.use("/api/auth", authRoutes);

app.use(errorMiddleware);

export default app;
