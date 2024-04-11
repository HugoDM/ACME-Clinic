import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import "./EditPatientPopUp.css"
import { PatientGender } from "../../Models/Enums/PatientGender";
import { GenderSelect } from "../GenderSelect";
import { Patient } from "../../Models/Patient";
import { PatientStatus } from "../../Models/Enums/PatientStatus";
import { StatusSelect } from "../StatusSelect/StatusSelect";

interface EditPatientPopUpProps {
    open: boolean;
    onClose: () => void;
    patient: Patient;
    patientId: number
}

export const EditPatientPopUp = ({
    open,
    onClose,
    patient,
    patientId
}: EditPatientPopUpProps) => {

    const [name, setName] = useState(patient.Name);
    const [birthDate, setBirthDate] = useState(patient.BirthDate);
    const [taxNumber, setTaxNumber] = useState(patient.TaxNumber);
    const [gender, setGender] = useState(patient.Gender == 0 ? PatientGender.Male : patient.Gender == 1 ? PatientGender.Female : PatientGender.Other);
    const [address, setAddress] = useState(patient.Address);
    const [status, setStatus] = useState(patient.Status == 0 ? PatientStatus.Active : PatientStatus.Inactive);

    const handleUpdateButton = () => {
        var patients: Patient[] = JSON.parse(localStorage.getItem("PatientsList")!) ?? [];
        patients[patientId] = {
            Address: address,
            BirthDate: birthDate,
            Gender: gender,
            Name: name,
            Status: status,
            TaxNumber: taxNumber,
        };
        localStorage.setItem("PatientsList", JSON.stringify(patients));
        onClose();
    }

    return (
        <div className="PopUp" style={{ display: open ? "flex" : "none" }}>
            <div className="PopUpContent">
                <div className="Header">
                    Cadastrar Paciente
                    <Button name="Cancelar" onClick={onClose} />
                </div>
                <div className="PatientInfo">
                    <div className="FormLine">
                        <Input
                            label="Nome Completo"
                            placeholder="Nome do paciente"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <GenderSelect value={gender} setGender={setGender} />
                    </div>
                    <div className="FormLine">
                        <Input
                            label="Data de Nascimento"
                            placeholder="dd/mm/aaaa"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                        />
                        <Input
                            label="CPF"
                            placeholder="000.000.000-00"
                            value={taxNumber}
                            onChange={(e) => setTaxNumber(e.target.value)}
                        />
                    </div>
                    <div className="FormLine">
                        <Input
                            label="Endereço"
                            placeholder="Insira o endereço"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />

                        <StatusSelect value={status} setStatus={setStatus} />
                    </div>
                    <div className="ButtonRegister">
                        <Button name="Alterar" onClick={handleUpdateButton} />
                    </div>
                </div>
            </div>
        </div>
    );
}