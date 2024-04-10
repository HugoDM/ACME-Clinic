import { ReactElement } from 'react';
import './Input.css';

interface IInputProps {
    label: string;
    placeholder: string;
};

export const Input = ({
    label,
    placeholder,
}: IInputProps) => {
    return (
        <div className='InputDiv'>
            <label className='InputLabel'>{label}</label>
            <input className='' placeholder={placeholder}>
            </input>
        </div>
    );
};