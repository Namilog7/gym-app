"use client"

import { ReactElement } from "react";

interface ButtonProps {
    className: string;
    content: string
    icon?: ReactElement
}

export const Button: React.FC<ButtonProps> = ({ className, content, icon }) => {
    return (
        <button className={className}>
            <p>{content}</p>
            {icon}
        </button>
    )
}