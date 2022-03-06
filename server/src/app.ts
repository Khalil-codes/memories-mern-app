import dotenv from "dotenv";
// dotenv config in typescript
dotenv.config({ path: `${__dirname}/../../.env` });
const PORT: string | number = process.env.PORT || 5000;
// Main Imports
import express, { Express, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";

// Start
const app: Express = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes Middleware
app.get("/api/memories", (req: Request, res: Response) => {
    res.status(200).json({ message: "Hello World" });
});
// Listen
app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
