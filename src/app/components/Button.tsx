"use client"

interface ButtonProps {
    className: string;
    content: string
}

export const Button: React.FC<ButtonProps> = ({ className, content }) => {
    return (
        <button className={className}>
            <p>{content}</p>
        </button>
    )
}