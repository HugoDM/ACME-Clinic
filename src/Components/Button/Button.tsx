import './Button.css';

interface ButtonProps {
    name: string;
    onClick: () => void;
}

export const Button = ({
    name,
    onClick,
}: ButtonProps) => {
    return (
        <button className='Button' onClick={onClick} >
            {name}
        </button>
    );
};