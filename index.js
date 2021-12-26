import app from "./server.js";
import connectDb from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();

connectDb(app);
