import React from 'react';
import './Button.css';

interface ButtonProps {
    name?: string;
    onClick: () => void;
    icon?: any;
}

export const Button = ({
    name,
    onClick,
    icon,
}: ButtonProps) => {
    return (
        <button className='Button' onClick={onClick}>
            {icon}
            {name}
        </button>
    );
};