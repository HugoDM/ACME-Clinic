import { useEffect, useState } from "react";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { PatientTable } from "../../Components/PatientTable";
import { RegisterPatientPopUp } from "../../Components/RegisterPatientPopUp";
import './Home.css'

export const Home = () => {


    const storedPatients = JSON.parse(localStorage.getItem("PatientsList")!);

    const [patients, setPatients] = useState(storedPatients);
    const [nameSearch, setNameSearch] = useState("");
    const [popUpOpen, setPopUpOpen] = useState(false);

    const handleNameSearchChange = (e: any) => {
        setNameSearch(e.target.value);
    }

    const handlePopUpClose = () => {
        setPopUpOpen(false);
    }

    useEffect(() => {
        console.log(storedPatients);
    }, patients)

    return (
        <div className="HomePage">
            <div className="TopBar">
                <Input
                    label="Buscar Paciente"
                    placeholder="Escreva o nome do paciente"
                    value={nameSearch}
                    onChange={handleNameSearchChange}
                />
                <Button name="Buscar" onClick={() => { }} />
                <Button name="Cadastrar Paciente" onClick={() => setPopUpOpen(true)} />
            </div>
            <div className="CentralDiv">
                <PatientTable patientsList={patients} />
            </div>
            <RegisterPatientPopUp open={popUpOpen} onClose={handlePopUpClose} />
        </div>
    );
};