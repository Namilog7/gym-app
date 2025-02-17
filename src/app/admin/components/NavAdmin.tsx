"use client"
import { useState } from "react";
import Modal from "react-modal"
import { ModalAdd } from "./ModalAdd";
import { CSSProperties } from "react";
import useNumberStore from "@/app/store/store";
import { Alert, Slide } from "@mui/material"
import { signOut } from "next-auth/react";

export const NavAdmin = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [showAlert, setShowAlert] = useState({
        isView: false,
        info: ""
    })

    const { numbers } = useNumberStore()
    const [valueSelect, setValueSelect] = useState("")
    const customStyles: { content: CSSProperties; overlay: CSSProperties } = {
        content: {
            width: '40%',
            height: "70%",
            maxHeight: '80vh',
            margin: 'auto',
            padding: '20px',
            borderRadius: '8px',
            overflowX: 'auto',
            backgroundColor: 'white',
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
    };

    const openModal = (e: any) => {
        if (numbers.length > 1) {
            const select = document.getElementById("select") as HTMLSelectElement;
            if (select) {
                window.alert("Debe realizar un movimiento a la vez");
                select.selectedIndex = 0;
            }
            return;
        }
        setIsOpen(!isOpen)
        setValueSelect(e.target?.value)
    }

    const handleSignOut = () => {
        signOut({ callbackUrl: '/' }); // Esto redirigirá a la raíz después del signOut
    };

    return (
        <nav className="navAdmin" >
            <div>
                <img src="/gymlogo.png" alt="logo" height={70} />
            </div>
            <div>
                <div className="options" >
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-users" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                    </svg>
                    <select name="" id="select" className="selectoptions" onChange={openModal}>
                        <option value="" disabled selected>Miembros</option>
                        <option value="AGREGAR">Agregar</option>
                        <option value="EDITAR">Editar</option>
                        <option value="ELIMINAR">Eliminar</option>
                    </select>
                </div>

                <div className="options" style={{ backgroundColor: "red" }} onClick={handleSignOut}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-back" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1" />
                    </svg>
                </div>
            </div>
            <Modal
                isOpen={isOpen}
                overlayClassName="custom-overlay"
                className="modallogin"
                onRequestClose={() => openModal(!isOpen)}
                style={customStyles}
            >
                <ModalAdd title={valueSelect} member={numbers[0]} setShowAlert={setShowAlert} setIsOpen={setIsOpen} />
            </Modal>
            <div style={{ position: "absolute", top: "2%", left: "35%" }}>
                {
                    <Slide in={showAlert.isView} direction="down" mountOnEnter unmountOnExit >
                        <Alert severity="success">{showAlert.info} </Alert>
                    </Slide>
                }
            </div>
        </nav>
    )
}
