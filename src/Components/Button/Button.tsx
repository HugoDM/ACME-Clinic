import './Button.css';

interface ButtonProps {
    name?: string;
    onClick: () => void;
    icon?: any;
    disabled?: boolean;
}

export const Button = ({
    name,
    onClick,
    icon,
    disabled = false,
}: ButtonProps) => {
    return (
        <button disabled={disabled} className='Button' onClick={onClick}>
            {icon}
            {name}
        </button>
    );
};