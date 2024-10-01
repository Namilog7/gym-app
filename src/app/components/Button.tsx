"use client"
import Modal from "react-modal";
import { useEffect, useState } from "react";
import { ReactElement } from "react";
import { ModalLogin } from "./ModalLogin";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

interface ButtonProps {
    className: string;
    content: string
    icon?: ReactElement
}

export const Button: React.FC<ButtonProps> = ({ className, content, icon }) => {
    const [isClicked, setIsClicked] = useState(false)
    const { data: session, status } = useSession()

    useEffect(() => {
        if (session?.user?.email == "gonzalodavidbaeznoriega@gmail.com" && status == "authenticated") {
            redirect("/admin")
        }
    }, [session])
    return (
        <>
            <button className={className} onClick={() => setIsClicked(!isClicked)}>
                <p>{content}</p>
                {icon}
            </button>
            <Modal
                isOpen={isClicked}
                overlayClassName="custom-overlay"
                className="modallogin"
                onRequestClose={() => setIsClicked(!isClicked)}
            >
                <ModalLogin />
            </Modal>
        </>
    )
}