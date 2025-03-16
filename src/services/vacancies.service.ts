import { Vacancy, IVacancy } from "../model/vacancy.model";

export class VacancyService {
    static async getAll(): Promise<IVacancy[]> {
        return await Vacancy.find();
    }

    static async getById(id: string): Promise<IVacancy | null> {
        return await Vacancy.findById(id);
    }

    static async create(data: IVacancy): Promise<IVacancy> {
        return await Vacancy.create(data);
    }
}
