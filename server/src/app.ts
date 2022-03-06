import dotenv from "dotenv";
// dotenv config in typescript
dotenv.config({ path: `${__dirname}/../../.env` });

// Main Imports
import express, { Express } from "express";

// Start
const app: Express = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
