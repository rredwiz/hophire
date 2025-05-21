interface ButtonProps {
    label: string;
    onClick: () => void;
}

export default function Button({ label, onClick }: ButtonProps) {

    return (
        <button
            className="bg-red-300 text-shadow-violet-300 px-4 rounded hover:bg-blue-200"
            onClick={onClick}
        >
            {label}
        </button>
    );
}
