import mongoose, { Schema, Document } from "mongoose";

export interface IVacancy extends Document {
    title: string;
    description: string;
    requirements: string[];
    technologies: string[];
}

const VacancySchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        requirements: { type: [String], required: true },
        technologies: { type: [String], required: true },
    },
    { timestamps: true }
);

export const Vacancy = mongoose.model<IVacancy>("Vacancy", VacancySchema);
