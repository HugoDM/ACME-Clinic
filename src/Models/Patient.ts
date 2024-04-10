import { PatientGender } from "./Enums/PatientGender";
import { PatientStatus } from "./Enums/PatientStatus";

export interface Patient {
    Name: string;
    BirthDate: string;
    TaxNumber: string;
    Gender: PatientGender;
    Address: string;
    Status: PatientStatus;
}