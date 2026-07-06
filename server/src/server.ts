import dotenv from "dotenv";
dotenv.config();

import prisma from "./config/prisma";
import app from "./app";

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await prisma.$connect();

    console.log("✅ Database Connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to connect to database", error);
    process.exit(1);
  }
}

startServer();
