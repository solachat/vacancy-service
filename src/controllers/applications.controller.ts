import { Request, Response } from "express";
import { ApplicationService } from "../services/application.service";

export class ApplicationController {
    static async create(req: Request, res: Response) {
        try {
            console.log("Received request body:", req.body);
            const application = await ApplicationService.createApplication(req.body);
            res.status(201).json(application);
        } catch (error) {
            res.status(400).json({ error: "Invalid data" });
        }
    }

    static async getByVacancy(req: Request, res: Response) {
        try {
            const { vacancyId } = req.params;
            const applications = await ApplicationService.getApplicationsByVacancy(vacancyId);
            res.json(applications);
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
