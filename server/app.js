import express from "express";
import dotenv from "dotenv";
dotenv.config();
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
const app = express();
app.get("/", (req, res) => {
  // throw new Error("error");
  res.send("home");
});
// middlewares
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
const PORT = process.env.port || 5000;

app.listen(PORT, () => {
  console.log(`server listening on the ${PORT}`);
});
