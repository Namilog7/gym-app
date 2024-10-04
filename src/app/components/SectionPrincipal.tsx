"use client"
import { NavBar } from "./NavBar"
import { Anton } from "next/font/google"
import { Button } from "./Button"
import { SessionProvider } from "next-auth/react"
export const anton = Anton({ weight: "400", subsets: ["latin"] })


export default function SectionPrincipal() {
    return (
        <SessionProvider>
            <header>
                <NavBar />
                <div className="contenedorheader">
                    <div className="divh1">
                        <h1 className={`${anton.className} titles`} style={{ fontSize: "4em", margin: "0" }}>ALCANZA TUS METAS</h1>
                        <h1 className={anton.className} style={{ fontSize: "4em", margin: "0", color: "#0E49BA" }}>
                            TRANSFORMA TU ESTILO DE VIDA
                        </h1>
                        <p style={{ fontSize: "20px", color: "grey" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae obcaecati quos animi nam excepturi distinctio, aliquam sunt null</p>
                        <Button content="ENTRENAR" className="ingresar" />
                    </div>

                </div>
            </header>
        </SessionProvider>
    )
}