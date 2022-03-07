import dotenv from "dotenv";
// dotenv config in typescript
dotenv.config({ path: `${__dirname}/../../.env` });
const PORT: string | number = process.env.PORT || 5000;
// Main Imports
import express, { Express, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db";
import router from "./routes/postsRoutes";

// Connecting to MongoDB
connectDB();

// Start
const app: Express = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: true, limit: "30mb" }));

// Routes Middleware
app.use("/api/posts", router);

// Listen
app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
