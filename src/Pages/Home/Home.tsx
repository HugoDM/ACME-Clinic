import React from "react";
import { useEffect, useState } from "react";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { PatientTable } from "../../Components/PatientTable";
import { RegisterPatientPopUp } from "../../Components/RegisterPatientPopUp";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import './Home.css'

export const Home = () => {

    const storedPatients = JSON.parse(localStorage.getItem("PatientsList")!) ?? [];

    const [patients, setPatients] = useState(storedPatients ?? []);
    const [nameFilter, setNameFilter] = useState("");
    const [popUpOpen, setPopUpOpen] = useState(false);

    const handleNameSearchChange = (e: any) => {
        setNameFilter(e.target.value);
    }

    const handlePopUpClose = () => {
        setPopUpOpen(false);
    }

    useEffect(() => {
        console.log(storedPatients);
    }, [patients, storedPatients]);

    return (
        <div className="HomePage">
            <div className="TopBar">
                <Input
                    label="Buscar Paciente"
                    placeholder="Escreva o nome do paciente"
                    value={nameFilter}
                    onChange={handleNameSearchChange}
                />
                <Button name="Cadastrar Paciente" onClick={() => setPopUpOpen(true)} icon={<PersonAddIcon />} />
            </div>
            <div className="CentralDiv">
                <PatientTable patientsList={patients} filter={nameFilter} />
            </div>
            <RegisterPatientPopUp open={popUpOpen} onClose={handlePopUpClose} onChange={setPatients} />
        </div>
    );
};