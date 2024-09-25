"use client"
import { useState } from "react";
import Modal from "react-modal"
import { ModalAdd } from "./ModalAdd";
import { CSSProperties } from "react";


export const NavAdmin = () => {
    const [isOpen, setIsOpen] = useState(false)
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
        setIsOpen(!isOpen)
        setValueSelect(e.target.value)
    }
    return (
        <nav className="navAdmin" >
            <div>
                <img src="/gymlogo.png" alt="logo" height={70} />
            </div>
            <div>
                <div className="options" >
                    <select name="" id="select" className="selectoptions" onChange={openModal}>
                        <option value="" disabled selected>Miembros</option>
                        <option value="AGREGAR">Agregar</option>
                        <option value="EDITAR">Editar</option>
                    </select>
                </div>
                <div className="options">
                    <p>Productos</p>
                </div>
                <form action="">
                    <label htmlFor="search"></label>
                    <input type="text" />
                </form>
            </div>
            <Modal
                isOpen={isOpen}
                overlayClassName="custom-overlay"
                className="modallogin"
                onRequestClose={() => setIsOpen(!isOpen)}
                style={customStyles}

            >
                <ModalAdd title={valueSelect} />
            </Modal>
        </nav>
    )
}