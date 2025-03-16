import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import vacanciesRoutes from "./routes/vacancies.router";
import applicationsRoutes from "./routes/applicationts.routes";
import dotenv from "dotenv"

dotenv.config()

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// API Routes
app.use("/api/vacancies", vacanciesRoutes);
app.use("/api/applications", applicationsRoutes);

// Health Check
app.get("/api", (req, res) => {
    res.json({ message: "API is running..." });
});

export default app;
