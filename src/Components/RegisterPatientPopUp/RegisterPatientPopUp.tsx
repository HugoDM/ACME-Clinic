import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import "./RegisterPatientPopUp.css"
import { PatientGender } from "../../Models/Enums/PatientGender";
import { GenderSelect } from "../GenderSelect";
import { Patient } from "../../Models/Patient";
import { PatientStatus } from "../../Models/Enums/PatientStatus";

interface RegisterPatientPopUpProps {
    open: boolean;
    onClose: () => void;
}

export const RegisterPatientPopUp = ({
    open,
    onClose
}: RegisterPatientPopUpProps) => {

    const [name, setName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [taxNumber, setTaxNumber] = useState("");
    const [gender, setGender] = useState(PatientGender.Male);
    const [address, setAddress] = useState("");
    const [status, setStatus] = useState(PatientStatus.Active);

    const handleRegisterButton = () => {
        var patients: Patient[] = JSON.parse(localStorage.getItem("PatientsList") ?? "") ?? [];
        var newPatient: Patient = {
            Address: address,
            BirthDate: birthDate,
            Gender: gender,
            Name: name,
            Status: status,
            TaxNumber: taxNumber,
        };
        console.log(patients);
        patients.push(newPatient);
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
                        <GenderSelect setGender={setGender} />
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
                    </div>
                    <div className="ButtonRegister">
                        <Button name="Cadastrar" onClick={handleRegisterButton} />
                    </div>
                </div>
            </div>
        </div>
    );
}