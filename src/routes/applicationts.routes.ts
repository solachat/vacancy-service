import { Router } from "express";
import { ApplicationController } from "../controllers/applications.controller";

const router = Router();

router.post("/create", ApplicationController.create);
router.get("/:vacancyId", ApplicationController.getByVacancy);

export default router;
