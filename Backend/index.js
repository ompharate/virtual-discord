import express from "express";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";
import { userRouter } from "./Routes/userRoutes.js";
import { dbConnection } from "./db_Connection/connection.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api/user", userRouter);
dbConnection();
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
