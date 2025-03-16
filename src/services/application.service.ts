import { Application, IApplication } from "../model/application.model";

export class ApplicationService {
    static async createApplication(data: IApplication): Promise<IApplication> {
        return await Application.create(data);
    }

    static async getApplicationsByVacancy(vacancyId: string): Promise<IApplication[]> {
        return await Application.find({ vacancyId });
    }
}
