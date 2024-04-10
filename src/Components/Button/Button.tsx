
interface ButtonProps {
    name: string;
    onClick: () => void;
}

export const Button = ({
    name,
    onClick,
}: ButtonProps) => {
    return (
        <button onClick={onClick} >
            {name}
        </button>
    );
};