"use client"
import { anton } from "./SectionPrincipal"
import Piramid from "./Piramid"
export default function SectionNosotros() {
    return (
        <div className="nosotros">
            <div>
                <h3 className={`${anton.className} titles`}>Nuestro Lugar</h3>
                <p>Nos encontramos en San Javier Rotonda </p>
            </div>
            <div className="nosotroscontenido">
                <div className="contenido">
                    <h3>Disciplina y Voluntad</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque placeat qui voluptatem necessitatibus inventore illum provident. Iure magni, ratione ipsa, dicta veniam eaque necessitatibus sequi illum nobis, culpa nisi accusantium!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo deleniti a inventore repellat cumque delectus odit et, perspiciatis architecto expedita culpa vero excepturi, aut nemo quasi adipisci dolore fugit in?</p>
                    <Piramid />
                </div>
                <div className="nosotrosimg">
                    <img src="/photogym1.jpg" alt="fotogim1" style={{ width: "400px", height: "200px" }} loading="lazy" />
                    <img src="/photogym2.jpg" alt="fotogim2" style={{ width: "400px", height: "200px" }} loading="lazy" />
                    <img src="/photogym3.jpg" alt="fotogim3" style={{ width: "400px", height: "200px" }} loading="lazy" />
                </div>
            </div>
        </div>
    )
}