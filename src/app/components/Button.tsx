"use client"
import ReactModal from "react-modal";
import { useState } from "react";
import { ReactElement } from "react";
import { ModalLogin } from "./ModalLogin";

interface ButtonProps {
    className: string;
    content: string
    icon?: ReactElement
}

export const Button: React.FC<ButtonProps> = ({ className, content, icon }) => {
    const [isClicked, setIsClicked] = useState(false)
    return (
        <>
            <button className={className} onClick={() => setIsClicked(!isClicked)}>
                <p>{content}</p>
                {icon}
            </button>
            <ReactModal
                isOpen={isClicked}
                overlayClassName="custom-overlay"
                className="modallogin"
                onRequestClose={() => setIsClicked(!isClicked)}
            >
                <ModalLogin />
            </ReactModal>
        </>
    )
}