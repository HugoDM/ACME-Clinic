import { Patient } from "../../Models/Patient";

interface PatientTableProps {
    patientsList: Patient[];
}

export const PatientTable = ({ patientsList = [] }: PatientTableProps) => {
    return (
        <table>
            <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>Nascimento</th>
                <th>Sexo</th>
                <th>Status</th>
            </tr>
            {
                patientsList.map((patient, id) => {
                    return (
                        <tr>
                            <th>{patient.Name}</th>
                            <th>{patient.TaxNumber}</th>
                            <th>{patient.BirthDate}</th>
                            <th>{patient.Gender}</th>
                            <th>{patient.Status}</th>
                        </tr>
                    )
                })
            }
        </table>
    );
};