"use client"
import ContenidoNosotros from "./ContenidoNosotros"
import { anton } from "./SectionPrincipal"
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