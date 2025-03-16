import { Router } from "express";
import { VacancyController } from "../controllers/vacancies.controller";

const router = Router();

router.get("/", VacancyController.getAll);
router.get("/:id", VacancyController.getById);
router.post("/", VacancyController.create);

export default router;
