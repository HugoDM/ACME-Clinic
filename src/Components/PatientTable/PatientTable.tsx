import { Patient } from "../../Models/Patient";
import { PatientTableLine } from "../PatientTableLine";
import "./PatientTable.css";

interface PatientTableProps {
    patientsList: Patient[];
    filter: string;
}

export const PatientTable = ({ patientsList = [], filter }: PatientTableProps) => {
    return (
        <table data-testid="table" className="Table">
            <tbody>
                <tr>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Nascimento</th>
                    <th>Endereço</th>
                    <th>Sexo</th>
                    <th>Status</th>
                    <th style={{ width: "100px" }}>Editar</th>
                    <th style={{ width: "100px" }}>Inativar</th>
                </tr>
                {
                    patientsList.map((patient, id) => {
                        if (filter == "" || patient.Name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
                            return <PatientTableLine patient={patient} id={id} />;
                    })
                }
            </tbody>
        </table>
    );
};