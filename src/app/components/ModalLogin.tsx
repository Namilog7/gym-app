"use client"
import { FcGoogle } from "react-icons/fc";
import { FaUserCircle } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
export const ModalLogin = () => {
    return (
        <>
            <h2>Inicia Sesión</h2>
            <form action="" className="form">
                <div>
                    <FaUserCircle style={{ fontSize: "30px" }} />
                    <label htmlFor="email"></label>
                    <input type="text" name="email" id="email" placeholder="Email" />
                </div>
                <div>
                    <IoIosLock style={{ fontSize: "30px" }} />
                    <label htmlFor=""></label>
                    <input type="password" name="password" id="password" placeholder="Contraseña" />
                </div>
                <button>Continuar</button>
                <div className="divterceros">
                    <div className="google">
                        <FcGoogle className="icon" />
                        <p>Continuar con Google</p>
                    </div>
                </div>
                <span style={{ fontWeight: "lighter" }}>Si no tenes cuenta solo completa los campos o continua con Google</span>
            </form>
        </>
    )
}