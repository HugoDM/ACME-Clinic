import './Button.css';

interface ButtonProps {
    name?: string;
    onClick: () => void;
    icon?: any;
    disabled?: boolean;
    color?: string;
    testId?: string;
}

export const Button = ({
    name,
    onClick,
    icon,
    disabled = false,
    color,
    testId
}: ButtonProps) => {
    return (
        <button data-testid={testId} style={{ background: color }} disabled={disabled} className='Button' onClick={onClick}>
            {icon}
            {name}
        </button>
    );
};