"use client"
import ContenidoNosotros from "./ContenidoNosotros"
import { Anton } from "next/font/google"
const anton = Anton({ weight: "400", subsets: ["latin"] })
export default function SectionNosotros() {
    return (
        <div className="nosotros" id="section2">
            <div>
                <h3 className={`${anton.className} titles`}>NUESTRO LUGAR</h3>
                <p>Nos encontramos en San Javier Rotonda </p>
            </div>
            <ContenidoNosotros />
        </div>
    )
}