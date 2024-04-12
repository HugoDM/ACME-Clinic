import { useEffect, useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import "./RegisterPatientPopUp.css"
import { PatientGender } from "../../Models/Enums/PatientGender";
import { GenderSelect } from "../GenderSelect";
import { Patient } from "../../Models/Patient";
import { PatientStatus } from "../../Models/Enums/PatientStatus";
import { StatusSelect } from "../StatusSelect";
import { maskTaxNumber } from "../../Util/maskTaxNumber";
import { maskDate } from "../../Util/maskDate";

interface RegisterPatientPopUpProps {
    open: boolean;
    onClose: () => void;
    onChange: (patients: Patient[]) => void;
}

export const RegisterPatientPopUp = ({
    open,
    onClose,
    onChange
}: RegisterPatientPopUpProps) => {

    const [name, setName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [taxNumber, setTaxNumber] = useState("");
    const [gender, setGender] = useState(PatientGender.Male);
    const [address, setAddress] = useState("");
    const [status, setStatus] = useState(PatientStatus.Active);
    const [errorMessage, setErrorMessage] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        setIsButtonDisabled(
            name === "" ||
            birthDate === "" ||
            birthDate.length < 10 ||
            taxNumber === "" ||
            taxNumber.length < 14
        );
    }, [name, birthDate, taxNumber])


    const handleRegisterButton = () => {
        var patients: Patient[] = JSON.parse(localStorage.getItem("PatientsList")!) ?? [];
        var alreadyRegistered = false;
        var newPatient: Patient = {
            Address: address,
            BirthDate: birthDate,
            Gender: gender,
            Name: name,
            Status: status,
            TaxNumber: taxNumber,
        };
        patients.forEach(patient => {
            if (patient.TaxNumber === newPatient.TaxNumber)
                alreadyRegistered = true;
        })
        if (alreadyRegistered) {
            setErrorMessage("CPF já cadastrado!");
        } else {
            setErrorMessage("");
            patients.push(newPatient);
            onChange(patients);
            localStorage.setItem("PatientsList", JSON.stringify(patients));
            onClose();
        }
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
                            onChange={(e) => setBirthDate(maskDate(e.target.value))}
                        />
                        <Input
                            label="CPF"
                            placeholder="000.000.000-00"
                            value={taxNumber}
                            onChange={(e) => setTaxNumber(maskTaxNumber(e.target.value))}
                        />
                    </div>
                    <div className="FormLine">
                        <Input
                            label="Endereço"
                            placeholder="Insira o endereço"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />

                        <StatusSelect setStatus={setStatus} />
                    </div>
                    <div className="ButtonRegister">
                        <Button disabled={isButtonDisabled} name="Cadastrar" onClick={handleRegisterButton} />
                        {errorMessage && <span>{errorMessage}</span>}
                    </div>
                </div>
            </div>
        </div>
    );
}