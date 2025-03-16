import mongoose, { Schema, Document } from "mongoose";

export interface IApplication extends Document {
    vacancyId: mongoose.Types.ObjectId;
    fullName: string;
    contactType: string;
    contactValue: string;
    expectedSalary?: number;
    availableFrom?: Date;
    aboutYou?: string;
}

const ApplicationSchema: Schema = new Schema(
    {
        vacancyId: { type: Schema.Types.ObjectId, ref: "Vacancy", required: true },
        fullName: { type: String, required: true },
        contactType: { type: String, required: true },
        contactValue: { type: String, required: true },
        expectedSalary: { type: Number, required: false },
        availableFrom: { type: Date, required: false },
        aboutYou: { type: String, required: false },
    },
    { timestamps: true }
);

export const Application = mongoose.model<IApplication>("Application", ApplicationSchema);
