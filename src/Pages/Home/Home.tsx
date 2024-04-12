import { useState } from "react";
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
        window.location.reload();
    }


    return (
        <div className="HomePage">
            <div data-testid="logo" className="Logo" />
            <div data-testid="patient-management" className="PatientManagement">
                <Input
                    label="Buscar Paciente"
                    placeholder="Escreva o nome do paciente"
                    value={nameFilter}
                    onChange={handleNameSearchChange}
                />
                <Button testId="button-Cadastrar-Paciente" name="Cadastrar Paciente" onClick={() => setPopUpOpen(true)} icon={<PersonAddIcon />} color="#44e344" />
            </div>
            <div data-testid="patients-table" className="PatientsTable">
                <PatientTable patientsList={patients} filter={nameFilter} />
            </div>
            {popUpOpen && <RegisterPatientPopUp open={popUpOpen} onClose={handlePopUpClose} onChange={setPatients} />}
        </div>
    );
};