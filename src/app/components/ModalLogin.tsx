"use client"
import { FcGoogle } from "react-icons/fc";
import { FaUserCircle } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { signIn } from "next-auth/react";
import { MouseEvent } from "react";

export const ModalLogin = () => {

    const login = async (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        try {
            const log = await signIn("google")
            console.log(log)
        } catch (error) {
            console.log(error)
        }
    }

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
                    <div onClick={login} className="google">
                        <FcGoogle className="icon" />
                        <p>Continuar con Google</p>
                    </div>
                </div>
                <span style={{ fontWeight: "lighter" }}>Si no tenes cuenta solo completa los campos o continua con Google</span>
            </form>
        </>
    )
}