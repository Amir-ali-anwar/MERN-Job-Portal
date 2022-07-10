import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/connect.js";
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import authRoutes from "./routes/authRoutes.js";
import JobRoutes from "./routes/jobRoutes.js";
const app = express();
// routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/jobs", JobRoutes);

// middlewares
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
app.use(express.json());
const PORT = process.env.port || 4000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => {
      console.log(`server listening on the ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
