import { Request, Response, RequestHandler } from "express";
import { VacancyService } from "../services/vacancies.service";

export class VacancyController {
    static getAll: RequestHandler = async (req: Request, res: Response): Promise<void> => {
        try {
            const vacancies = await VacancyService.getAll();
            res.json(vacancies);
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    };

    static getById: RequestHandler = async (req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params;
            const vacancy = await VacancyService.getById(id);
            if (!vacancy) {
                res.status(404).json({ error: "Vacancy not found" });
                return;
            }
            res.json(vacancy);
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    };

    static create: RequestHandler = async (req: Request, res: Response): Promise<void> => {
        try {
            const vacancy = await VacancyService.create(req.body);
            res.status(201).json(vacancy);
        } catch (error) {
            res.status(400).json({ error: "Invalid data" });
        }
    };
}
