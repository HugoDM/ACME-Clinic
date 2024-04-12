import './Button.css';

interface ButtonProps {
    name?: string;
    onClick: () => void;
    icon?: any;
    disabled?: boolean;
    color?: string;
}

export const Button = ({
    name,
    onClick,
    icon,
    disabled = false,
    color
}: ButtonProps) => {
    return (
        <button style={{ background: color }} disabled={disabled} className='Button' onClick={onClick}>
            {icon}
            {name}
        </button>
    );
};