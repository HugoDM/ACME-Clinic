import { PatientGender } from "../../Models/Enums/PatientGender";
import { PatientStatus } from "../../Models/Enums/PatientStatus";
import { Patient } from "../../Models/Patient";
import EditIcon from '@mui/icons-material/Edit';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import "./PatientTableLine.css"
import { Button } from "../Button";
import { EditPatientPopUp } from "../EditPatientPopUp";
import { useState } from "react";

interface PatientTableLineProps {
    patient: Patient;
    id: number;
}

export const PatientTableLine = ({ patient, id }: PatientTableLineProps) => {
    var patients: Patient[] = JSON.parse(localStorage.getItem("PatientsList")!) ?? [];
    const [popUpOpen, setPopUpOpen] = useState(false);


    const setPatientGender = (gender: PatientGender) => {
        switch (gender) {
            case PatientGender.Male:
                return "Masculino";

            case PatientGender.Female:
                return "Feminino";

            default:
                return "Outro";
        }
    }

    const setPatientStatus = (status: PatientStatus) => {
        if (status === PatientStatus.Active)
            return "Ativo";
        else
            return "Inativo";
    }

    const inactivePatient = (value: number) => {
        patients[value].Status = PatientStatus.Inactive;
        localStorage.setItem("PatientsList", JSON.stringify(patients));
        window.location.reload();
    };

    const handleClosePopUp = () => {
        setPopUpOpen(false);
        window.location.reload();
    }

    return (
        <tr>
            <td>{patient.Name}</td>
            <td>{patient.TaxNumber}</td>
            <td>{patient.BirthDate}</td>
            <td>{patient.Address}</td>
            <td>{setPatientGender(patient.Gender)}</td>
            <td>{setPatientStatus(patient.Status)}</td>
            <td><Button onClick={() => setPopUpOpen(true)} icon={<EditIcon />} /></td>
            <td><Button onClick={() => inactivePatient(id)} icon={<PersonOffIcon />} /></td>
            <EditPatientPopUp open={popUpOpen} onClose={handleClosePopUp} patient={patient} patientId={id} />
        </tr>
    );
}