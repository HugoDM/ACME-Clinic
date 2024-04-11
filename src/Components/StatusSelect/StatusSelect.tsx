import "./StatusSelect.css"
import { PatientStatus } from "../../Models/Enums/PatientStatus";

interface StatusSelectProps {
    value?: number;
    setStatus: (value: PatientStatus) => void;
}

export const StatusSelect = ({ value, setStatus }: StatusSelectProps) => {
    const handleChangeSelect = (value: string) => {
        if (value === "0")
            setStatus(PatientStatus.Active);
        else
            setStatus(PatientStatus.Inactive);
    }

    return (
        <div className="StatusSelect">
            <label className="SelectLabel">Status</label>
            <select className="Select" value={value ?? PatientStatus.Active} onChange={(e) => handleChangeSelect(e.target.value)}>
                <option value={PatientStatus.Active}>Ativo</option>
                <option value={PatientStatus.Inactive}>Inativo</option>
            </select>
        </div>
    );
}