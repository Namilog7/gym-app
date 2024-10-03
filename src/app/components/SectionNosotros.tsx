"use client"
import { anton } from "./SectionPrincipal"
export default function SectionNosotros() {
    return (
        <div className="nosotros">
            <div>
                <h3 className={`${anton.className} titles`}>Nuestro Lugar</h3>
                <p>Nos encontramos en San Javier Rotonda </p>
            </div>
            <div className="nosotrosimg">
                <img src="/photogym1.jpg" alt="fotogim1" style={{ width: "400px", height: "200px" }} />
                <img src="/photogym2.jpg" alt="fotogim2" style={{ width: "400px", height: "200px" }} />
                <img src="/photogym3.jpg" alt="fotogim3" style={{ width: "400px", height: "200px" }} />
            </div>
        </div>
    )
}