import React from 'react';
import './Input.css';

interface IInputProps {
    label: string;
    placeholder: string;
    value: string;
    onChange: (value: any) => void;
};

export const Input = ({
    label,
    placeholder,
    value,
    onChange = () => { },
}: IInputProps) => {
    return (
        <div className='InputDiv'>
            <label className='InputLabel'>{label}</label>
            <input
                className='Input'
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};