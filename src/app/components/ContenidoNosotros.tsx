import Piramid from "./Piramid";
import Images from "./Images";

export default function ContenidoNosotros() {
    return (
        <div className="nosotroscontenido">
            <div className="contenido">
                <h3>Disciplina y Voluntad</h3>
                <p style={{ color: "grey" }}>VikingGym es un gimnasio de barrio Formado por chicos del barrio en 2022
                    Fue un proyecto armado Desde 0 con la intención de que los jóvenes de la zona tengan un lugar donde poder trabajar y dedicarse tiempo, formar disciplina y caracter</p>
                <p style={{ color: "grey" }}> Demostrando a los jóvenes que quien quiere puede
                    si tenés un sueño meta u objetivo lo podés conseguir con dedicación tiempo y disciplina</p>
                <Piramid />
            </div>
            <Images />
        </div>
    )
}