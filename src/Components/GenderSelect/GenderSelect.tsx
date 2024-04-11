import React from "react";
import { PatientGender } from "../../Models/Enums/PatientGender";
import "./GenderSelect.css"

interface GenderSelectProps {
    setGender: (value: PatientGender) => void;
}

export const GenderSelect = ({ setGender }: GenderSelectProps) => {
    const handleChangeSelect = (value: string) => {
        switch (value) {
            case "0":
                setGender(PatientGender.Male);
                break;

            case "1":
                setGender(PatientGender.Female);
                break;

            default:
                setGender(PatientGender.Other);
        }
    }

    return (
        <div className="GenderSelect">
            <label className="SelectLabel">Sexo</label>
            <select className="Select" onChange={(e) => handleChangeSelect(e.target.value)}>
                <option value={PatientGender.Male}>Masculino</option>
                <option value={PatientGender.Female}>Feminino</option>
                <option value={PatientGender.Other}>Outro</option>
            </select>
        </div>
    );
}